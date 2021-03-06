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

    sendEmail(name, email, message);
}

//Send data to Firebase//

function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({

        name: name,
        email: email,
        message: message,
    });

}

//Send contact form data to email//

function sendEmail(name, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "primarimabusiness@gmail.com",
        Password: "rzxhejhepiybamzf",
        To: "primarimabusiness@gmail.com",
        From: "primarimabusiness@gmail.com",
        Subject: `${name} sent you a message.`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then((message) => modalAlert())
}

//Message sent alert// 

let modalBg = document.querySelector(".modal-bg");

function modalAlert() {
    //Making modal visable//
    modalBg.classList.add("modal-active");

    modalDisappear();

}

function modalDisappear() {
    setTimeout(function () {
        modalBg.classList.remove("modal-active")
    }, 1000);
}

//Making menu appear when clicked//
const menuBtn = document.querySelector("#menu-button");
const menuContainer = document.querySelector(".menu-container");
menuBtn.addEventListener('click', () => menuContainer.classList.toggle('noMenu'));

//Making menu disappear when a link is clicked//

document.querySelectorAll('.menu-disappear').forEach(item => {
    item.addEventListener('click', () =>
        menuContainer.classList.toggle('noMenu')
    )
})