// consts en lets:
// Poppetje gerelateerd
const marthaMood = document.querySelector("#marthaImg")
let marthaHappy = false

// constanten voor de buttons, opgevraagd met ID's
const addSla = document.getElementById("addSla")
const addSaus = document.getElementById("addSaus")
const addTomaat = document.getElementById("addTomaat")
const addUi = document.getElementById("addUi")
const leverIn = document.getElementById("leverIn")

// constanten voor de toppings, opgevraagd met ID's
const Sla = document.getElementById("sla")
const Saus = document.getElementById("saus")
const Tomaat = document.getElementById("tomaat")
const Ui = document.getElementById("ui")

const Base = document.getElementById("base")

// statussen voor de functions
let slaStatus = true
let sausStatus = true
let tomaatStatus = true
let uiStatus = true

// let voor de h3 aanpassen:
let header3 = document.getElementById("h3Eis")

// sound
let bell = new Audio('sound/game_sound.mp3');

// functions om de images weer te geven.
function showSla (){
  if (slaStatus == true) {
    Sla.style.visibility = "visible";
    slaStatus = false
  } else {
    Sla.style.visibility = "hidden";
    slaStatus = true
  }
}

function showSaus (){
  if (sausStatus == true) {
    Saus.style.visibility = "visible";
    sausStatus = false
  } else {
    Saus.style.visibility = "hidden";
    sausStatus = true
  }
}

function showTomaat (){
  if (tomaatStatus == true) {
    Tomaat.style.visibility = "visible";
    tomaatStatus = false
  } else {
    Tomaat.style.visibility = "hidden";
    tomaatStatus = true
  }
}

function showUi (){
  if (uiStatus == true) {
    Ui.style.visibility = "visible";
    uiStatus = false
  } else {
    Ui.style.visibility = "hidden";
    uiStatus = true
  }
}

// martha:
// code om eisen te stellen:
let willekeurigGetal 

function tostadaGetal() {
  willekeurigGetal = Math.random() * 7
  willekeurigGetal = Math.round(willekeurigGetal)  
}
tostadaGetal()
// eisen aanpassen based on het random nummer:
function randomEisen() {
  if ((willekeurigGetal==0) || (willekeurigGetal==1)){
    header3.textContent = "Hoi! ik wil graag een tostada met alles erop!"
  } if ((willekeurigGetal==2) || (willekeurigGetal==3)){
    header3.textContent = "Hoi! ik wil graag een tostada zonder saus!"
  } if ((willekeurigGetal==4) || (willekeurigGetal==5)){
    header3.textContent = "Hoi! ik wil graag een tostada zonder tomaat!"
  } if ((willekeurigGetal==6) || (willekeurigGetal==7)){
    header3.textContent = "Hoi! ik wil graag een tostada zonder ui!"
  }
}
randomEisen()
// 1 grote function met if else die controleert op het getal, en op basis daarvan de eisen stelt, deze function genereert de waarde van "switchGetal" die ik gebruik ik de switchfunction om de code compacter te maken.

/* originele versie met if else, bewaard omdat ik dit nog gebruik om te vergelijken, en als backup
function tostadaCheck(){
  if ((willekeurigGetal==0) || (willekeurigGetal==1)){
    if ((slaStatus == false) && (sausStatus == false) && (tomaatStatus == false) && (uiStatus == false)){
      marthaMood.src="images/martha-mood-base.png"
      marthaHappy = false
      console.log("correct ingeleverd")
      header3.textContent = "Dankjewel!"
    } else {
      marthaMood.src="images/martha-boos.png"
      marthaHappy = false
      console.log("niet correct ingeleverd")
      header3.textContent = "Dat is niet wat ik wilde!"
    }
  } if ((willekeurigGetal==2) || (willekeurigGetal==3)){
      if ((slaStatus == false) && (sausStatus == true) && (tomaatStatus == false) && (uiStatus == false)){
        marthaMood.src="images/martha-mood-base.png"
        marthaHappy = false
        console.log("correct ingeleverd")
        header3.textContent = "Dankjewel!"
      } else {
        marthaMood.src="images/martha-boos.png"
        marthaHappy = false
        console.log("niet correct ingeleverd")
        header3.textContent = "Dat is niet wat ik wilde!"
      }
  } if ((willekeurigGetal==4) || (willekeurigGetal==5)){
      if ((slaStatus == false) && (sausStatus == false) && (tomaatStatus == true) && (uiStatus == false)){
        marthaMood.src="images/martha-mood-base.png"
        marthaHappy = false
        console.log("correct ingeleverd")
        header3.textContent = "Dankjewel!"
      } else {
        marthaMood.src="images/martha-boos.png"
        marthaHappy = false
        console.log("niet correct ingeleverd")
        header3.textContent = "Dat is niet wat ik wilde!"
      }
  } if ((willekeurigGetal==6) || (willekeurigGetal==7)){
    if ((slaStatus == false) && (sausStatus == false) && (tomaatStatus == false) && (uiStatus == true)){
      marthaMood.src="images/martha-mood-base.png"
      marthaHappy = false
      console.log("correct ingeleverd")
      header3.textContent = "Dankjewel!"
    } else {
      marthaMood.src="images/martha-boos.png"
      marthaHappy = false
      console.log("niet correct ingeleverd")
      header3.textContent = "Dat is niet wat ik wilde!"
    }
    if (willekeurigGetal==8){
      if ((slaStatus == false) && (sausStatus == true) && (tomaatStatus == false) && (uiStatus == false)){
        marthaMood.src="images/martha-mood-base.png"
        marthaHappy = false
        console.log("correct ingeleverd")
        header3.textContent = "Dankjewel!"
      } else {
        marthaMood.src="images/martha-dead.png"
        marthaHappy = false
        console.log("Martha is dood")
        header3.textContent = " "
      }}
  }
setTimeout(clearTostada, 5000)
setTimeout(randomEisen, 5000)
}
*/

// function met switch :
let switchGetal
function tostadaCheck(){
  if ((willekeurigGetal==0) || (willekeurigGetal==1)){
    if ((slaStatus == false) && (sausStatus == false) && (tomaatStatus == false) && (uiStatus == false)){
      switchGetal = 1
    }}
    if ((willekeurigGetal==2) || (willekeurigGetal==3)){
    if ((slaStatus == false) && (sausStatus == true) && (tomaatStatus == false) && (uiStatus == false)){
      switchGetal = 2
    }}
  if ((willekeurigGetal==4) || (willekeurigGetal==5)){
    if ((slaStatus == false) && (sausStatus == false) && (tomaatStatus == true) && (uiStatus == false)){
      switchGetal = 3
    }}
  if ((willekeurigGetal==6) || (willekeurigGetal==7)){
    if ((slaStatus == false) && (sausStatus == false) && (tomaatStatus == false) && (uiStatus == true)){
      switchGetal = 4
    }}
  checkSwitch()
  // link naar de fucntion die het spel restart, met een delay van 5 seconden
  setTimeout(clearTostada, 5000)
  setTimeout(randomEisen, 5000)
  }

// switchfunction, die op basis van het eerder gegenereerde getal een reactie genereerd.
function checkSwitch() {
  switch (switchGetal) {
    case 1:
        marthaMood.src="images/martha-base-size.png"
        header3.textContent = "Dankjewel!"
      break;
    case 2:
        marthaMood.src="images/martha-base-size.png"
        header3.textContent = "Dankjewel!"
      break;
    case 3:
        marthaMood.src="images/martha-base-size.png"
        header3.textContent = "Dankjewel!"
    case 4:
        marthaMood.src="images/martha-base-size.png"
        header3.textContent = "Dankjewel!"
      break;
    default:
      marthaMood.src="images/martha-boos.png"
      header3.textContent = "Dat is niet wat ik wilde!"
}}

// functie die het spel opnieuw start. en linkt naar de fucntie die opnieuw een "tostadaGetal" genereert en daarmee nieuwe eisen stelt. deze function linkt ook naar het geluid, en naar de "baseShow" functie die na nog een kleine delay weer een img toont waarmee het voor de speler iets duidelijker is dat het spel opnieuw begint.
function clearTostada() {
  Sla.style.visibility = "hidden";
  slaStatus = true
  Saus.style.visibility = "hidden";
  sausStatus = true
  Tomaat.style.visibility = "hidden";
  tomaatStatus = true
  Ui.style.visibility = "hidden";
  uiStatus = true
  Base.style.visibility = "hidden";
  setTimeout(baseShow, 1000)
  marthaMood.src="images/martha-base-size.png"
  bell.play();
  tostadaGetal()
}
 function baseShow(){
  Base.style.visibility = "visible";
 }

// eventlisteners voor de knoppen:
addSla.addEventListener('click',showSla)
addSaus.addEventListener("click", showSaus)
addTomaat.addEventListener('click',showTomaat)
addUi.addEventListener('click',showUi)
// eventlistenter voor inleveren
leverIn.addEventListener('click', tostadaCheck)