// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyDbAm5K3m1v6pY8PZTKlolvj2NeYmUCqkU",
  authDomain: "my-first-project-40f4c.firebaseapp.com",
  projectId: "my-first-project-40f4c",
  storageBucket: "my-first-project-40f4c.appspot.com",
  messagingSenderId: "347554215628",
  appId: "1:347554215628:web:bfed829dd2b60131c6f469",
  measurementId: "G-T890F6C7RD"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const signup_email = document.getElementById("signup_email");
const signup_password = document.getElementById("signup_password");
const signup_btn = document.getElementById("signup_btn");

const signin_email = document.getElementById("signin_email");
const signin_password = document.getElementById("signin_password");
const signin_btn = document.getElementById("signin_btn");


const user_email = document.getElementById("user_email");
const logout_btn = document.getElementById("logout_btn");


const auth_container=document.getElementById("auth_container");
const user_container=document.getElementById("user_container");


signup_btn.addEventListener("click", createUserAccount);
signin_btn.addEventListener("click",signIn);
logout_btn.addEventListener("click",logout);


onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is loogged in");
    const uid = user.uid;
    auth_container.style.display ="none"
    user_container.style.display ="block"
    user_email.innerText=user.email;


  } else {
    console.log("user is not logged ");
    auth_container.style.display ="block"
    user_container.style.display ="none"
    
  }
});

function createUserAccount(){ 
  // console.log(signup_email.value);
  // console.log(signup_password.value);

  createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });


}
function signIn(){
  // console.log(signin_email.value);
  // console.log(signin_password.value);
  signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}
function logout(){
  signOut(auth)
  .then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
  



