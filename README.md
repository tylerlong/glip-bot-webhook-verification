# Glip Bot WebHook Verification

This project is a demo project to verify that the bot WebHook can receive message from the "ALL Employees" team.


## How to run


`yarn serve` to start local express service.


`yarn proxy` to start Ngrok proxy.


Copy and paste ngrok server URL to `.env` file.


`yarn setup` set setup bot WebHook.

Test the WebHook.


## Run PubNub

Just to compare the messages with WebHook:

```
yarn pubnub
```
