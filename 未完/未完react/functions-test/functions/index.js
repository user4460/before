const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp()

exports.fetchBookInfo = functions.https.onRequest(async (request, response) => {
   try {
      const db = admin.firestore()
      const doc = await db.collection('books').doc('000-0000000000').get()

      const bookInfo = doc.data()
      response.send(bookInfo)
   } catch (e) {
      console.error(e);
      response.status(500).send(e)
   }
});

