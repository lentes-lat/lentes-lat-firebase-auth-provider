const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

// Add Firebase SDK Snippet
const firebaseConfig = {
  apiKey: "AIzaSyDXYf4wE7Fd4NxMQ-bT2BmpksmpEamXypc",
  authDomain: "sinuous-canto-310617.firebaseapp.com",
  projectId: "sinuous-canto-310617",
  storageBucket: "sinuous-canto-310617.appspot.com",
  messagingSenderId: "351560205955",
  appId: "1:351560205955:web:ad8235b2af4064433c7db6",
  measurementId: "G-FSRC1XKW4Y"
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase;
