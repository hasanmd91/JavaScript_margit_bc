const startButton = document.querySelector("#start");
const endButton = document.querySelector("#end");
const circles = document.querySelectorAll(".circle");
const score = document.querySelector("#score");
const overlay = document.querySelector("#overlay");
const modalscore = document.querySelector("#modalscore");
const closebutton = document.querySelector("#closebutton");

let count = 0;
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

// end game functionality starts here

const endGame = () => {
  overlay.style.visibility = "visible";
  clearTimeout(timer);
  initialMode = false;
};

// end game functionality ends here

// circles click functionalty starts here

const scoreCount = (i) => {
  if (i != activeNum) {
    endGame();
  } else {
    count++;
    rounds--;
    score.textContent = count;
    if (count <= 1) {
      modalscore.textContent = ` You pciked only ${count} color`;
    } else if (count >= 2 && count <= 5) {
      modalscore.textContent = ` You pciked  ${count} color`;
    } else if (count > 6) {
      modalscore.textContent = ` You pciked  ${count} color very good job`;
    }
  }
};

circles.forEach((circle, i) => {
  circle.addEventListener("click", () => {
    if (circle.click && initialMode === true) {
      scoreCount(i);
    }
  });
});

// circles click functionalty ends here

// reset game functionalty starts here

const newGame = () => {
  window.location.reload();
};

// reset game functionalty ends here

startButton.addEventListener("click", startgame);
endButton.addEventListener("click", endGame);
closebutton.addEventListener("click", newGame);
