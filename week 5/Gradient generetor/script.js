let inputFirst = document.getElementById("input1");
let inputSecond = document.getElementById("input2");
let buttons = document.querySelectorAll("label");
let display = document.querySelector(".container");
let code = document.querySelector(".rgbCode");
let color1 = "";
let color2 = "";
let gradientPosition = "";
let r = 250;
let g = 250;
let b = 110;
let R = 196;
let G = 236;
let B = 116;

inputFirst.addEventListener("input", () => {
  color1 = inputFirst.value;
  for (i = 0; i < color1.length; i++) {
    r = parseInt(color1[1] + color1[2], 16);
    g = parseInt(color1[3] + color1[4], 16);
    b = parseInt(color1[5] + color1[6], 16);
  }
});

inputSecond.addEventListener("input", () => {
  color2 = inputSecond.value;
  for (i = 0; i < color2.length; i++) {
    R = parseInt(color2[1] + color2[2], 16);
    G = parseInt(color2[3] + color2[4], 16);
    B = parseInt(color2[5] + color2[6], 16);
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(r, g, b);
    gradientPosition = button.id;
    display.style.backgroundImage = `linear-gradient(${gradientPosition},rgb(${r},${g},${b}),rgb(${R},${G},${B})`;
    code.innerHTML = ` <p> linear-gradient:<span> ${gradientPosition} </span>  <span> rgb(${r},${g},${b})</span> <span> rgb(${R},${G},${B})</span></p>`;
  });
});
