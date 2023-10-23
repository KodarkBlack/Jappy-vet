  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB66pOvUmgWAyEAMaybBfGwH--ppmgzHUg",
    authDomain: "jappyvet.firebaseapp.com",
    projectId: "jappyvet",
    storageBucket: "jappyvet.appspot.com",
    messagingSenderId: "677038236168",
    appId: "1:677038236168:web:8c8aa4e7330d51c38ca7bd",
    measurementId: "G-HJ279J4LRZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app)

//   getting all the form object

let email = document.getElementById('email')
let password = document.getElementById('password')

window.login = function(e){
    e.preventDefault();

    const obj = {
        email : email.value,
        password : password.value
    };

    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        window.location.replace('product.html')
        console.log(user.uid)
        alert("Login Successful")
    })

    .catch(function(error){
        alert("login error" + err)
    })

    console.log(obj)
}


