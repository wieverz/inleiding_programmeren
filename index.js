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
let sausStatus = false
let tomaatStatus = false
let uiStatus = false

// let voor de h3 aanpassen:
let header3 = document.getElementById("h3Eis")

// sound
let bell = new Audio('sound/game_sound.mp3');

// functions om de images weer te geven.
function showSla (){
  if (slaStatus == false) {
    Sla.style.visibility = "visible";
    slaStatus = true
  } else {
    Sla.style.visibility = "hidden";
    slaStatus = false
  }
  console.log(slaStatus)
}

function showSaus (){
  if (sausStatus == false) {
    Saus.style.visibility = "visible";
    sausStatus = true
  } else {
    Saus.style.visibility = "hidden";
    sausStatus = false
  }
  console.log(sausStatus)
}

function showTomaat (){
  if (tomaatStatus == false) {
    Tomaat.style.visibility = "visible";
    tomaatStatus = true
  } else {
    Tomaat.style.visibility = "hidden";
    tomaatStatus = false
  }
  console.log(tomaatStatus)
}

function showUi (){
  if (uiStatus == false) {
    Ui.style.visibility = "visible";
    uiStatus = true
  } else {
    Ui.style.visibility = "hidden";
    uiStatus = false
  }
  console.log(uiStatus)
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
      header3.textContent = "Dankjewel!"
    } else {
      marthaMood.src="images/martha-boos.png"
      marthaHappy = false
      header3.textContent = "Dat is niet wat ik wilde!"
    }
  } if ((willekeurigGetal==2) || (willekeurigGetal==3)){
      if ((slaStatus == false) && (sausStatus == true) && (tomaatStatus == false) && (uiStatus == false)){
        marthaMood.src="images/martha-mood-base.png"
        marthaHappy = false
        header3.textContent = "Dankjewel!"
      } else {
        marthaMood.src="images/martha-boos.png"
        marthaHappy = false
        header3.textContent = "Dat is niet wat ik wilde!"
      }
  } if ((willekeurigGetal==4) || (willekeurigGetal==5)){
      if ((slaStatus == false) && (sausStatus == false) && (tomaatStatus == true) && (uiStatus == false)){
        marthaMood.src="images/martha-mood-base.png"
        marthaHappy = false
        header3.textContent = "Dankjewel!"
      } else {
        marthaMood.src="images/martha-boos.png"
        marthaHappy = false
        header3.textContent = "Dat is niet wat ik wilde!"
      }
  } if ((willekeurigGetal==6) || (willekeurigGetal==7)){
    if ((slaStatus == false) && (sausStatus == false) && (tomaatStatus == false) && (uiStatus == true)){
      marthaMood.src="images/martha-mood-base.png"
      marthaHappy = false
      header3.textContent = "Dankjewel!"
    } else {
      marthaMood.src="images/martha-boos.png"
      marthaHappy = false
      header3.textContent = "Dat is niet wat ik wilde!"
    }
    if (willekeurigGetal==8){
      if ((slaStatus == false) && (sausStatus == true) && (tomaatStatus == false) && (uiStatus == false)){
        marthaMood.src="images/martha-mood-base.png"
        marthaHappy = false
        header3.textContent = "Dankjewel!"
      } else {
        marthaMood.src="images/martha-dead.png"
        marthaHappy = false
        header3.textContent = " "
      }}
  }
setTimeout(clearTostada, 5000)
setTimeout(randomEisen, 5000)
}
*/
// function met switch :
let switchGetal = 0

function tostadaCheck(){
  // tostada met alles
  if ((willekeurigGetal==0) || (willekeurigGetal==1)){
    if ((slaStatus == true) && (sausStatus == true) && (tomaatStatus == true) && (uiStatus == true)){
      showBooleans()
      switchGetal = 1
    }
  }
  // tostada zonder saus
  if ((willekeurigGetal==2) || (willekeurigGetal==3)){
    if ((slaStatus == true) && (sausStatus == false) && (tomaatStatus == true) && (uiStatus == true)){
      showBooleans()
      switchGetal = 1
    }
  }
  // tostada zonder tomaat
  if ((willekeurigGetal==4) || (willekeurigGetal==5)){
    if ((slaStatus == true) && (sausStatus == true)  && (tomaatStatus == false)&& (uiStatus == true)){
      showBooleans()  
      switchGetal = 1
    }
  }
  // tostada zonder ui
  if ((willekeurigGetal==6) || (willekeurigGetal==7)){
    if ((slaStatus == true) && (sausStatus == true) && (tomaatStatus == true) && (uiStatus == false)){
      showBooleans()
      switchGetal = 1
    }
  } 
  checkSwitch()
  // link naar de function die het spel restart, met een delay van 5 seconden
  setTimeout(clearTostada, 5000)
  setTimeout(randomEisen, 5000)
}
   

// switchfunction, die op basis van het eerder gegenereerde getal een reactie genereerd.
function checkSwitch() {
  console.log("checkSwitch " + switchGetal)
  switch (switchGetal) {
    case 1:
      marthaMood.src="images/martha-base-size.png"
      header3.textContent = "Dankjewel!"
    break;
    case 2:
      marthaMood.src="images/martha-boos.png"
      header3.textContent = "Dat is niet wat ik wilde!"
  default:
    marthaMood.src="images/martha-boos.png"
    header3.textContent = "Dat is niet wat ik wilde!"
}}

function showBooleans(){
  console.log("sla status = " + slaStatus)
  console.log("saus status = " + sausStatus)
  console.log("tomaat status = " + tomaatStatus)
  console.log("ui status = " + uiStatus)
  console.log("switchgetal = " + switchGetal)
}

/* eerste switch functie
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
      case 5:
        marthaMood.src="images/martha-boos.png"
        header3.textContent = "Dat is niet wat ik wilde!"
    default:
      marthaMood.src="images/martha-boos.png"
      header3.textContent = "Dat is niet wat ik wilde!"
}}
*/

// functie die het spel opnieuw start. en linkt naar de fucntie die opnieuw een "tostadaGetal" genereert en daarmee nieuwe eisen stelt. deze function linkt ook naar het geluid, en naar de "baseShow" functie die na nog een kleine delay weer een img toont waarmee het voor de speler iets duidelijker is dat het spel opnieuw begint.
function clearTostada() {
  Sla.style.visibility = "hidden";
  slaStatus = false
  Saus.style.visibility = "hidden";
  sausStatus = false
  Tomaat.style.visibility = "hidden";
  tomaatStatus = false
  Ui.style.visibility = "hidden";
  uiStatus = false
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
