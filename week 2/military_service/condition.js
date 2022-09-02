const input = document.getElementById("input");
const para = document.getElementById("status");
let age;

const checkAge = () => {
  if (age <= 18) {
    para.innerHTML = "too young";
  } else if (age <= 27) {
    para.innerText = "right age for militry service";
  } else if (age <= 41) {
    para.innerText = "you are in reserve";
  } else if (age <= 55) {
    para.innerText = "you are in backup reserve";
  } else if (age >= 56) {
    para.innerText = "too aged";
  }
};

input.addEventListener("input", (e) => {
  age = e.target.value;
});
