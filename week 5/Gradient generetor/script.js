let inputFirst = document.getElementById("input1");
let inputSecond = document.getElementById("input2");
let buttons = document.querySelectorAll("label");
let display = document.querySelector(".container");
let color1;
let color2;
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
    display.style.backgorundImage = `linear-gradient(${gradientPosition}, ${color1}, ${color2})`;
    console.log(`linear-gradient(${gradientPosition}, ${color1}, ${color2})`);
  });
});
