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
firebase.initializeApp(firebaseConfig);

const hitCounter = document.getElementById("hit-counter");
hitCounter.style.display = "none";

const db = firebase.database().ref("Dibalik layar: menuju pentas seni");
db.on("value", (snapshot) => {
  hitCounter.textContent = parseInt(snapshot.val()).toLocaleString().replaceAll('.','.');
});

db.transaction(
  (totalHits) => totalHits + 1,
  (error) => {
    if (error) {
      console.log(error);
    } else {
      hitCounter.style.display = "inline-block";
    }
  }
);

const userCookieName = "returningVisitor";
checkUserCookie(userCookieName);

function checkUserCookie(userCookieName) {
  const regEx = new RegExp(userCookieName, "g");
  const cookieExists = document.cookie.match(regEx);
  if (cookieExists != null) {
    hitCounter.style.display = "inline-block";
  } else {
    createUserCookie(userCookieName);
    db.transaction(
      (totalHits) => totalHits + 1,
      (error) => {
        if (error) {
          console.log(error);
        } else {
          hitCounter.style.display = "inline-block";
        }
      }
    );
  }
}