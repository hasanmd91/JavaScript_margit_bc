let inputFirst = document.getElementById("input1");
let inputSecond = document.getElementById("input2");
let buttons = document.querySelectorAll("label");
let display = document.querySelector(".display");
let color1 = "";
let color2 = "";
let gradientPosition = "";

inputFirst.addEventListener("input", () => {
  color1 = inputFirst.value;
  console.log(color1);
});

inputSecond.addEventListener("input", () => {
  color2 = inputSecond.value;
  console.log(color2);
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    gradientPosition = button.id;
    display.style.backgroundImage = `linear-gradient( ${gradientPosition}, ${color1},${color2})`;
    console.log(gradientPosition, color1, color2);
  });
});
