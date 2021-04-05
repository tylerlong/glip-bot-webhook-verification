import RingCentral from '@rc-ex/core';
import Rest from '@rc-ex/core/lib/Rest';

const rc = new RingCentral({
  server: Rest.productionServer,
  token: {
    access_token: process.env.RINGCENTRAL_CHATBOT_TOKEN,
  },
});

(async () => {
  console.log('setup webhook');
  const r = await rc
    .restapi()
    .subscription()
    .post({
      eventFilters: [
        '/restapi/v1.0/glip/posts',
        '/restapi/v1.0/glip/groups',
        '/restapi/v1.0/account/~/extension/~',
      ],
      expiresIn: 36000, // 10 hours
      deliveryMode: {
        transportType: 'WebHook',
        address: process.env.RINGCENTRAL_CHATBOT_SERVER,
      },
    });
  console.log(JSON.stringify(r, null, 2));
  console.log('done');
})();
