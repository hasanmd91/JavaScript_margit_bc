const startButton = document.querySelector("#start");
const endButton = document.querySelector("#end");
const circles = document.querySelectorAll(".circle");
const score = document.querySelector("#score");
const overlay = document.querySelector("#overlay");
const modal = document.querySelector(".modal");
const result = document.querySelector("#result");

let activeNum = 0;
let timer;
let pace = 1000;
let rounds = 0;
let initialMode = false;

// start game functionality starts here
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const newCircle = (activeNum) => {
  let nextActiveNum = randomNumber(0, 3);
  if (activeNum != nextActiveNum) {
    return nextActiveNum;
  } else {
    return newCircle(activeNum); // return what ??
  }
};

const startgame = () => {
  initialMode = true;
  startButton.style.display = "none";
  endButton.style.display = "initial";
  let nextActiveNum = newCircle(activeNum);
  circles[nextActiveNum].classList.toggle("active");
  circles[activeNum].classList.remove("active");

  activeNum = nextActiveNum;
  timer = setTimeout(startgame, pace);
  pace -= 10;
  rounds++;
  console.log(rounds);
};

// start game functionality ends here

startButton.addEventListener("click", startgame);
endButton.addEventListener("click", endGame);
