import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqqT5Yx46u55kg33s4WyrKPB6kd4O3Yt8",
  authDomain: "chat-19f32.firebaseapp.com",
  projectId: "chat-19f32",
  storageBucket: "chat-19f32.appspot.com",
  messagingSenderId: "821741290719",
  appId: "1:821741290719:web:7b38a5409679e7f298556a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const auth = getAuth();

export const storage = getStorage();
