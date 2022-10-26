/*const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/timestamp', (request, response) => {
   response.set('Cache-Control', 'public, max-age=300, s-maxage=600'); //ここを追記しました
   response.send(`${Date.now()}`);
})

exports.app = functions.https.onRequest(app);
*/
//functionsとは、firebaseの機能を使うためのライブラリです。
const functions = require('firebase-functions');
const express = require('express');
const engines = require('consolidate');

const app = express();
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

const facts = [
   { text: "1+1 = 2" },
   { text: "真実はいつも一つ" },
   { text: "工藤新一はコナン" }
];

app.get('/', (request, response) => {
   response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
   response.render('index', { facts });
})

exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
