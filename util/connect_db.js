require('dotenv').config();
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('../firestore-credentials.json')

const dbId = process.env.DATABASE_ID

const firestoreApp = initializeApp({
  credential: cert(serviceAccount),
  projectId: process.env.PROJECT_ID,
});

const db = getFirestore(firestoreApp, dbId);


module.exports = db;