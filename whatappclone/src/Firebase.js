import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBUxnQAVo-50ZrLLxKmx7WY0qf1DNWLpxU",
    authDomain: "whatsapp-clone-right-tickk.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-right-tickk.firebaseio.com",
    projectId: "whatsapp-clone-right-tickk",
    storageBucket: "whatsapp-clone-right-tickk.appspot.com",
    messagingSenderId: "102483540482",
    appId: "1:102483540482:web:79ac6582f5bb467610451b",
    measurementId: "G-F258S1W12M"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;