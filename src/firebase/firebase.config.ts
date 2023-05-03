import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdmBhL95QBebymYtr97LiHHHwS2badEy4",
  authDomain: "stb-cabs.firebaseapp.com",
  projectId: "stb-cabs",
  storageBucket: "stb-cabs.appspot.com",
  messagingSenderId: "685309146200",
  appId: "1:685309146200:web:f59c35fff93a3515d4c62d"
};


const app = initializeApp(firebaseConfig);
export const AUTH_FIREBASE = getAuth(app);