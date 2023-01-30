const  { initializeApp } =require("firebase/app") ;
const { getFirestore } =require("firebase/firestore") ;



//firebase config file
const firebaseConfig = {
    apiKey: "AIzaSyAnWv8SIoLwg76kScB--LtsVTSyPvyF6io",
    authDomain: "chopify-a1fd1.firebaseapp.com",
    projectId: "chopify-a1fd1",
    storageBucket: "chopify-a1fd1.appspot.com",
    messagingSenderId: "542172819944",
    appId: "1:542172819944:web:9fe8f160c46134db90745d",
    measurementId: "G-5WFTFSZK98"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
module.exports=db