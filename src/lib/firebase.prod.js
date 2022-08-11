import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCo8jTchMv2O0DME0Xzjiy5F0qJdvL6USQ",
  authDomain: "netflix-11d06.firebaseapp.com",
  projectId: "netflix-11d06",
  storageBucket: "netflix-11d06.appspot.com",
  messagingSenderId: "646836614700",
  appId: "1:646836614700:web:c9e90db023907b09238389",
  measurementId: "G-957V30YMN3"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
