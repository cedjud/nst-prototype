import firebase from 'firebase';// Initialize Firebase
var config = {
  apiKey: "AIzaSyCDkU04k8Xxw8eRUA4OKJlpyBgADlWxnDQ",
  authDomain: "nst-prototype.firebaseapp.com",
  databaseURL: "https://nst-prototype.firebaseio.com",
  projectId: "nst-prototype",
  storageBucket: "nst-prototype.appspot.com",
  messagingSenderId: "231694469094"
};
var fire = firebase.initializeApp(config)
export default fire;
