const hands = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors"];
const names = ["rock", "paper", "scissor"];
const colorwinner = "winner"; 
let handA = document.getElementById("handA"); 
let handB = document.getElementById("handB");
let nameA = document.getElementById("nameA");
let nameB = document.getElementById("nameB");
let playerA = document.querySelector("player-a");
let playerB = document.querySelector("player-b");
//Make Event Listeners
document.getElementById("play").addEventListener("click", play);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("play-again").addEventListener("click", playagain);
//making function play
function play() {
  counterA = setInterval(runnumberA, 100);
  counterB = setInterval(runnumberB, 100);
}
//making function runnumberA
function runnumberA() {
  const randomnumberA = getRandomNumberA();
  handA.setAttribute("class", hands[randomnumberA]);
  nameA.value = names[randomnumberA];
}
//making function runnumberA
function runnumberB() {
  const randomnumberB = getRandomNumberB();
  handA.setAttribute("class", hands[randomnumberB]);
  nameA.value = names[randomnumberB];
}
//making random numbers
function getRandomNumberA() {
  let min = 0;
  let max = 2;
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//making random numbers
function getRandomNumberB() {
  let min = 0;
  let max = 2;
  return Math.floor(Math.random() * (max - min + 1) + min);
}
