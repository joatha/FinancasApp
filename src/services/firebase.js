import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCDndv43X7QG21ye2G9TkHF713MCFvLY7Q",
    authDomain: "tarefasapp-39b96.firebaseapp.com",
    databaseURL: "https://tarefasapp-39b96-default-rtdb.firebaseio.com",
    projectId: "tarefasapp-39b96",
    storageBucket: "tarefasapp-39b96.appspot.com",
    messagingSenderId: "962722563742",
    appId: "1:962722563742:web:773ffbba7b16ebb59e9d8f"
  };
  
  // Initialize Firebase


  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
  }

  export default firebase;
