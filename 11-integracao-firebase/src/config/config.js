import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVvfzwGwZJmcgCDJUo3m6SplX_tds5ip4",
  authDomain: "lista-de-linguagens-51b2c.firebaseapp.com",
  databaseURL: "https://lista-de-linguagens-51b2c.firebaseio.com",
  projectId: "lista-de-linguagens-51b2c",
  storageBucket: "lista-de-linguagens-51b2c.appspot.com",
  messagingSenderId: "484199039984",
  appId: "1:484199039984:web:66cc99901b46e7b9c65335",
};

let app = Firebase.initializeApp(firebaseConfig);

export const db = app.database();
