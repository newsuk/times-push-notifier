Times Push Notifier
===================

Send push notifications for exclusive articles on The Times' mobile apps via the command line.

How To Use
----------

1. install dependencies with `npm install`
2. download a private key for the project that you want to notify:
    - [The Times - Prod](https://console.firebase.google.com/u/0/project/times-smartphone-prod/settings/serviceaccounts/adminsdk)
    - [The Times - UAT](https://console.firebase.google.com/u/0/project/times-smartphoned-uat/settings/serviceaccounts/adminsdk)
    - [The Times - Dev](https://console.firebase.google.com/u/0/project/times-development/settings/serviceaccounts/adminsdk)
    - [The Times Of Ireland - Prod](https://console.firebase.google.com/u/0/project/times-ireland-smartphone-prod/settings/serviceaccounts/adminsdk)
    - [The Times Of Ireland - UAT](https://console.firebase.google.com/u/0/project/times-ireland-smartphoned-uat/settings/serviceaccounts/adminsdk)

    Select "Generate new private key" and download the json file. Rename it to `serviceAccountKey.json` and put it in the root of this project.

    **DO NOT CHECK THIS PRIVATE KEY INTO ANY REPO OR YOU WILL BE FIRED**.

3. Send a notification with `node index.js --title <str> --body <str> --article-url <url> --image-url [url]`

Example
-------

```terminal
node index.js \
    --title "EXCLUSIVE: This is a notification" \
    --body "Here is some longer copy, usually a summary of the article" \
    --article-url https://www.thetimes.co.uk/article/58m-lottery-win-almost-in-tatters-0052w73vz \
    --image-url https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fefa6f8cc-9650-11e8-85e3-d844d3177259.jpg\?crop\=3499%2C1968%2C0%2C182\&resize\=2400
```
