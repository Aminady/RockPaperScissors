const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const boutons = document.querySelectorAll(".btn");
const computer = ["Rock", "Paper", "Scissors"];
const btnContainer = document.querySelector(".btn-grid");
const myPara = document.querySelector(".my-para");
const score = document.querySelector(".score");
let monScore = document.querySelector(".my-score");
let sonScore = document.querySelector(".comp-score");
let gameOverText = document.querySelector(".game-over");
let replay = document.querySelector('.replay');

let compPara = document.createElement("p");
compPara.className = 'computer-paragraphe'
let monPara = document.createElement("p");
monPara.className = 'my-paragraphe'
let paragraphe = document.createElement("p");
paragraphe.className = 'paragraphe'

myPara.appendChild(monPara);
myPara.appendChild(paragraphe);
myPara.appendChild(compPara);


let compScore = 0;
let myScore = 0;

sonScore.textContent = "Computer: 0";
monScore.textContent = "You: 0";
//---------------------------------------------------------------------------------------------------------------------------------------

function theGame() {

  btnContainer.addEventListener("click", (e) => {
    console.log(toUpperCase(e.target.id));
    if (e.target.id === "") {
      return `${compPara.textContent} = ""  ${monPara.textContent} = ""`;
    }
    compPara.textContent = computerPlay();
    if (
      (e.target.id === "rock" && compPara.textContent == "Rock") ||
      (e.target.id === "paper" && compPara.textContent == "Paper") ||
      (e.target.id === "scissors" && compPara.textContent == "Scissors")
    ) {
      monPara.textContent = toUpperCase(e.target.id);
      paragraphe.textContent = "Tie Break";
    } else if (
      (e.target.id === "rock" && compPara.textContent == "Paper") ||
      (e.target.id === "paper" && compPara.textContent == "Scissors") ||
      (e.target.id === "scissors" && compPara.textContent == "Rock")
    ) {
      monPara.textContent = toUpperCase(e.target.id);
      paragraphe.textContent = "You Lost";
      sonScore.textContent = `Computer: ${(compScore += 1)}`;
    } else if (
      (e.target.id === "rock" && compPara.textContent == "Scissors") ||
      (e.target.id === "paper" && compPara.textContent == "Rock") ||
      (e.target.id === "scissors" && compPara.textContent == "Paper")
    ) {
      monPara.textContent = toUpperCase(e.target.id);
      paragraphe.textContent = "You Won";
      monScore.textContent = `You: ${(myScore += 1)}`;
    }
    gameOver()
  });
};

theGame();


function computerPlay() {
  let x = Math.floor(Math.random() * computer.length);
  return computer[x];
};

function gameOver() {
  if(myScore === 5 ) {
    disableBtn("none")
    gameOverText.textContent = `GAME OVER. YOU WON`;
    replay.innerHTML = `        <svg class="retry-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/></svg>`
  } if(compScore === 5) {
    disableBtn("none")
    gameOverText.textContent = `GAME OVER. THE MACHINE WON`;
    replay.innerHTML = `       <svg class="retry-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/></svg>`
  }
}

function startFromZero() {
  disableBtn("auto")
  return    sonScore.textContent = "Computer: 0",
            monScore.textContent = "You: 0",
            compScore = 0,
            myScore = 0,
            paragraphe.textContent = "",
            compPara.textContent = "",
            monPara.textContent = "",
            gameOverText.textContent = "",
            replay.innerHTML = ""

}

replay.addEventListener('click', () => {
  startFromZero()
})

function disableBtn(cmd) {
  document.querySelectorAll(".btn").forEach(element => { 
    return element.style.pointerEvents = `${cmd}`
  }) 
}

function toUpperCase(input) {
  return input.charAt(0).toUpperCase() + input.slice(1)
}


