import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDfEtFCy89MJK6OTwUFO4PoSted5O65yuQ",
  authDomain: "whether-station-a8898.firebaseapp.com",
  projectId: "whether-station-a8898",
  storageBucket: "whether-station-a8898.appspot.com",
  messagingSenderId: "737862798825",
  appId: "1:737862798825:web:b2b4bee2b7370ec70c0f78",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
