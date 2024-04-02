const firebaseConfig = {
    apiKey: "AIzaSyAYx32jmuvgmRHmY795BxpdSfq1AYC4Z4I",
  authDomain: "andrep-id.firebaseapp.com",
  databaseURL: "https://andrep-id-default-rtdb.firebaseio.com",
  projectId: "andrep-id",
  storageBucket: "andrep-id.appspot.com",
  messagingSenderId: "901866141368",
  appId: "1:901866141368:web:0beedf714b54d13e8e264d",
  measurementId: "G-TFKQP4C41V"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var reportDB = firebase.database().ref("birthdays");

document.getElementById("birthdays").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var username = getElementVal("username");
    var pesan = getElementVal("pesan");

    saveMessages(username, pesan);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("birthdays").reset();
}

const saveMessages = (username, pesan) => {
    var newreport = reportDB.push();

    newreport.set({
        username: username,
        pesan: pesan,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

window.onload = function() {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month index
    var currentDay = currentDate.getDate();

    // Check if it's not July or it's not the 13th day of the month
    if (currentMonth !== 7 || currentDay !== 13) {
        window.location.href = "/akses di blokir"; // Redirect to index.html
    }
};