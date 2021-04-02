import RingCentral from '@rc-ex/core';
import PubNubExtension from '@rc-ex/pubnub';
import Rest from '@rc-ex/core/lib/Rest';
import waitFor from 'wait-for-async';

const rc = new RingCentral({
  server: Rest.productionServer,
  token: {
    access_token: process.env.RINGCENTRAL_CHATBOT_TOKEN,
  },
});
const pubNubExtension = new PubNubExtension();

(async () => {
  console.log('setup PubNub');
  await rc.installExtension(pubNubExtension);
  await pubNubExtension.subscribe(
    [
      '/restapi/v1.0/glip/posts',
      '/restapi/v1.0/glip/groups',
      '/restapi/v1.0/account/~/extension/~',
    ],
    message => {
      console.log('*** PubNub message start ***');
      console.log(message);
      console.log('*** PubNub message end ***');
    }
  );
  console.log('done');

  await waitFor({interval: 999999999});
})();
