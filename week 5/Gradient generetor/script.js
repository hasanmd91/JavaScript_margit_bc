let inputFirst = document.getElementById("input1");
let inputSecond = document.getElementById("input2");
let buttons = document.querySelectorAll("label");
let display = document.querySelector(".container");
let code = document.querySelector(".rgbCode");
let color1 = "#009dff";
let color2 = "#195ce1";
let gradientPosition = "";

inputFirst.addEventListener("input", () => {
  color1 = inputFirst.value;
});

inputSecond.addEventListener("input", () => {
  color2 = inputSecond.value;
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    gradientPosition = button.id;
    display.style.backgroundImage = `linear-gradient(${gradientPosition}, ${color1}, ${color2})`;
    code.innerHTML = ` <p> linear-gradient:<span> ${gradientPosition} </span>  <span> ${color1} </span>  <span> ${color2} </span></p>`;
  });
});
