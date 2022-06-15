import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTQGPuSrUcp_9nbiiDxM1o8NKTxoStcEs",
  authDomain: "backend-alienbooks.firebaseapp.com",
  projectId: "backend-alienbooks",
  storageBucket: "backend-alienbooks.appspot.com",
  messagingSenderId: "378617251864",
  appId: "1:378617251864:web:4bf8ee6ad7696223281b6d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
