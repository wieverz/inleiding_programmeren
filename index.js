// consts en lets bovenin:
// avatar gerelateerd
const marthaMood = document.querySelector("#marthaImg")
let marthaHappy = false

// buttons 
const addSla = document.getElementById("addSla")
const addSaus = document.getElementById("addSaus")
const addTomaat = document.getElementById("addTomaat")
const addUi = document.getElementById("addUi")
const leverIn = document.getElementById("leverIn")

// toppings
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
    console.log("sla")
    console.log(slaStatus)
  } else {
    Sla.style.visibility = "hidden";
    slaStatus = true
    console.log("sla uit")
    console.log(slaStatus)
  }
}

function showSaus (){
  if (sausStatus == true) {
    Saus.style.visibility = "visible";
    sausStatus = false
    console.log("saus")
    console.log(sausStatus)
  } else {
    Saus.style.visibility = "hidden";
    sausStatus = true
    console.log("saus uit")
    console.log(sausStatus)
  }
}

function showTomaat (){
  if (tomaatStatus == true) {
    Tomaat.style.visibility = "visible";
    tomaatStatus = false
    console.log("tomaat")
    console.log(tomaatStatus)
  } else {
    Tomaat.style.visibility = "hidden";
    tomaatStatus = true
    console.log("tomaat uit")
    console.log(tomaatStatus)
  }
}

function showUi (){
  if (uiStatus == true) {
    Ui.style.visibility = "visible";
    uiStatus = false
    console.log("ui")
    console.log(uiStatus)
  } else {
    Ui.style.visibility = "hidden";
    uiStatus = true
    console.log("ui uit")
    console.log(uiStatus)
  }
}

// martha:
// code om eisen te stellen:

let willekeurigGetal = Math.random() * 8
willekeurigGetal = Math.round(willekeurigGetal)  
console.log(willekeurigGetal)



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
  if (willekeurigGetal==8){
    header3.textContent = "Hoi! ik wil graag een tostada maar ik ben allergisch voor de saus."
  }
}

// 1 grote function met if else die controleert op het getal, en op basis daarvan de eisen stelt
function tostadaCheck(){
  if ((willekeurigGetal==0) || (willekeurigGetal==1)){
    if ((slaStatus == false) && (sausStatus == false) && (tomaatStatus == false) && (uiStatus == false)){
      marthaMood.src="images/martha-mood-base.png"
      marthaHappy = false
      console.log("correct ingeleverd")
      header3.textContent = "Dankjewel!"
      setTimeout(randomEisen, 5000)
    } else {
      marthaMood.src="images/martha-boos.png"
      marthaHappy = false
      console.log("niet correct ingeleverd")
      header3.textContent = "Dat is niet wat ik wilde!"
      setTimeout(randomEisen, 5000)
    }
  } if ((willekeurigGetal==2) || (willekeurigGetal==3)){
      if ((slaStatus == false) && (sausStatus == true) && (tomaatStatus == false) && (uiStatus == false)){
        marthaMood.src="images/martha-mood-base.png"
        marthaHappy = false
        console.log("correct ingeleverd")
        header3.textContent = "Dankjewel!"
        setTimeout(randomEisen, 5000)
      } else {
        marthaMood.src="images/martha-boos.png"
        marthaHappy = false
        console.log("niet correct ingeleverd")
        header3.textContent = "Dat is niet wat ik wilde!"
        setTimeout(randomEisen, 5000)
      }
  } if ((willekeurigGetal==4) || (willekeurigGetal==5)){
      if ((slaStatus == false) && (sausStatus == false) && (tomaatStatus == true) && (uiStatus == false)){
        marthaMood.src="images/martha-mood-base.png"
        marthaHappy = false
        console.log("correct ingeleverd")
        header3.textContent = "Dankjewel!"
        setTimeout(randomEisen, 5000)
      } else {
        marthaMood.src="images/martha-boos.png"
        marthaHappy = false
        console.log("niet correct ingeleverd")
        header3.textContent = "Dat is niet wat ik wilde!"
        setTimeout(randomEisen, 5000)
      }
  } if ((willekeurigGetal==6) || (willekeurigGetal==7)){
    if ((slaStatus == false) && (sausStatus == false) && (tomaatStatus == false) && (uiStatus == true)){
      marthaMood.src="images/martha-mood-base.png"
      marthaHappy = false
      console.log("correct ingeleverd")
      header3.textContent = "Dankjewel!"
      setTimeout(randomEisen, 5000)
    } else {
      marthaMood.src="images/martha-boos.png"
      marthaHappy = false
      console.log("niet correct ingeleverd")
      header3.textContent = "Dat is niet wat ik wilde!"
      setTimeout(randomEisen, 5000)
    }
    if (willekeurigGetal==8){
      if ((slaStatus == false) && (sausStatus == true) && (tomaatStatus == false) && (uiStatus == false)){
        marthaMood.src="images/martha-mood-base.png"
        marthaHappy = false
        console.log("correct ingeleverd")
        header3.textContent = "Dankjewel!"
        setTimeout(randomEisen, 5000)
      } else {
        marthaMood.src="images/martha-dead.png"
        marthaHappy = false
        console.log("Martha is dood")
        header3.textContent = " "
        setTimeout(randomEisen, 5000)
      }}
  }
setTimeout(clearTostada, 5000)
}

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
  marthaMood.src="images/martha-mood-base.png"
  bell.play();
}
 function baseShow(){
  Base.style.visibility = "visible";
  console.log("base return")
 }

// eventlisteners voor de knoppen:
addSla.addEventListener('click',showSla)
addSaus.addEventListener("click", showSaus)
addTomaat.addEventListener('click',showTomaat)
addUi.addEventListener('click',showUi)

 // leverIn.addEventListener('click',inLeveren)
 // eventlistenter voor inleveren
leverIn.addEventListener('click', tostadaCheck)

// automatische functions
randomEisen()