
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBCPxec0HSmtQ08M4lQArd9L09R-_W2XI",
  authDomain: "team1-grandlinemart.firebaseapp.com",
  projectId: "team1-grandlinemart",
  storageBucket: "team1-grandlinemart.appspot.com",
  messagingSenderId: "459536874549",
  appId: "1:459536874549:web:b31a7d8634fdf742d4457c",
  measurementId: "G-8XN2BMM6DH"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
