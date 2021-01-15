// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDyyRHD83vszzsdnDDlNqS_ntZXVt2OuYE",
    authDomain: "contact-form-745ad.firebaseapp.com",
    projectId: "contact-form-745ad",
    storageBucket: "contact-form-745ad.appspot.com",
    messagingSenderId: "49546093402",
    appId: "1:49546093402:web:357edbdd57a70721948963"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference contact info collections
let contactInfo = firebase.database().ref("info");

//Listen for submit event
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    //Get input values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;

    saveContactInfo(name, email, message);

    document.querySelector(".contact-form").reset();
}

function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({

        name: name,
        email: email,
        message: message,
    });

}