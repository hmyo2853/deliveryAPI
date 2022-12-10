// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQWhAj_jX8gI9jKPJ4jIPHmAIoO_JsI6U",
  authDomain: "toy-deliveryapi.firebaseapp.com",
  projectId: "toy-deliveryapi",
  storageBucket: "toy-deliveryapi.appspot.com",
  messagingSenderId: "461709175048",
  appId: "1:461709175048:web:e9d7dfec7ed4c586d624bd",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

export { firestore };
