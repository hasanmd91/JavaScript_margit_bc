const startButton = document.querySelector("#start");
const endButton = document.querySelector("#end");
const circles = document.querySelectorAll(".circle");
const score = document.querySelector("#score");

let active = 0;
let timer;
let speed = 1000;
let rounds = 0;
let scores = 0;

// click button function start

const clickCount = (index) => {
  if (index != active) {
    console.log("gameover");
  } else {
    scores++;
    console.log(scores);
  }
};

circles.forEach((circle, index) => {
  circle.addEventListener("click", () => clickCount(index));
});

// click button function end

// start game function start

const getRendomNUmber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const pickNew = () => {
  let nextActive = getRendomNUmber(0, 3);
  if (nextActive != active) {
    return nextActive;
  } else {
    return pickNew(active);
  }
};

const gameStart = () => {
  let nextActive = pickNew(active);
  circles[nextActive].classList.toggle("active");
  circles[active].classList.remove("active");
  active = nextActive;
  timer = setTimeout(gameStart, speed);
};

// start game function ends

const endGame = () => {
  console.log("first");
};

startButton.addEventListener("click", gameStart);
endButton.addEventListener("click", endGame);
