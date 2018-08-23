#!/usr/bin/env node

const firebase = require("firebase-admin");
const serviceAccountKey = require("./serviceAccountKey.json");
const argv = require("yargs")
  .usage(
    "Usage: $0 --token <str> --title <str> --body <str> --article-url <url> --image-url [url]"
  )
  .demandOption(["token", "title", "article-url", "image-url"]).argv;

// android push payloads cannot have a "notification" object, or inherit one.
// If they do, then the firebase service on the device controls the notification,
// rather than our own app. Our app needs to control the notification to enable
// rich notifications and deeplinking.
const android = {
  data: {
    type: "exclusives",
    title: argv["title"],
    body: argv["body"],
    "article-url": argv["article-url"],
    "image-url": argv["image-url"]
  }
};

const apns = {
  payload: {
    aps: {
      alert: {
        title: argv["title"],
        body: argv["body"]
      },
      mutableContent: true
    },
    type: "exclusives",
    "article-url": argv["article-url"],
    "image-url": argv["image-url"]
  }
};

console.log("Sending...");

firebase
  .messaging(
    firebase.initializeApp({
      credential: firebase.credential.cert(serviceAccountKey)
    })
  )
  .send({
    token: argv["token"],
    android: android,
    apns: apns
  })
  .then(result => {
    console.log("Notification sent!");
    console.log("Result:", result);
    process.exit();
  })
  .catch(error => {
    console.error("Notification failed!");
    console.error(error);
    process.exit(1);
  });