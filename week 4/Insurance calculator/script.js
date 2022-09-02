const form = document.querySelector("form");
const result = document.querySelector("#result");
const Customer = document.getElementById("name");
const age = document.getElementById("age");
let Customerhealth = document.querySelectorAll(".health");
let goodHabits = document.querySelectorAll(".Good_Habits");
let badHabits = document.querySelectorAll(".bad_habits");

let ínsuranceScore = 0;

const calculateInsurance = (event) => {
  let customerName = Customer.value;
  let customerAge = age.value;

  if (customerAge == 18) {
    ínsuranceScore = 500;
  } else if (customerAge > 18 && customerAge <= 25) {
    ínsuranceScore = 500 + (500 * 10) / 100;
  } else if (customerAge >= 26 && customerAge <= 35) {
    ínsuranceScore = 500 + (500 * 30) / 100;
  } else if (customerAge >= 36 && customerAge <= 45) {
    ínsuranceScore = 500 + (500 * 60) / 100;
  } else if (customerAge >= 46 && customerAge <= 55) {
    ínsuranceScore = 500 + (500 * 100) / 100;
  } else if (customerAge >= 56 && customerAge <= 65) {
    ínsuranceScore = 500 + (500 * 150) / 100;
  } else if (customerAge >= 66) {
    ínsuranceScore = 500 + (500 * 210) / 100;
  }

  Customerhealth.forEach((health) => {
    if (health.checked && health.id === "Hypertension") {
      ínsuranceScore += ínsuranceScore / 100;
    } else if (health.checked && health.id === "Blood_sugar") {
      ínsuranceScore += ínsuranceScore / 100;
    } else if (health.checked && health.id === "Overweight") {
      ínsuranceScore += ínsuranceScore / 100;
    }
  });

  goodHabits.forEach((habit) => {
    if (habit.checked && habit.id === "exercise") {
      ínsuranceScore -= (ínsuranceScore * 5) / 100;
    } else if (habit.checked && habit.id === "walking") {
      ínsuranceScore -= (ínsuranceScore * 5) / 100;
    } else if (habit.checked && habit.id === "swimming") {
      ínsuranceScore -= (ínsuranceScore * 5) / 100;
    }
  });

  badHabits.forEach((badhabit) => {
    if (badhabit.checked && badhabit.id === "Smoking") {
      ínsuranceScore += (ínsuranceScore * 5) / 100;
    } else if (badhabit.checked && badhabit.id === "Alcohol") {
      ínsuranceScore += (ínsuranceScore * 5) / 100;
    } else if (badhabit.checked && badhabit.id === "Drugs") {
      ínsuranceScore += (ínsuranceScore * 5) / 100;
    }
  });

  console.log(ínsuranceScore);

  result.innerHTML = `Name : <span> ${customerName} </span> Your insurance score is: <span> ${ínsuranceScore.toFixed(
    0
  )} </span>  `;
  event.preventDefault();
};

form.addEventListener("submit", calculateInsurance);
