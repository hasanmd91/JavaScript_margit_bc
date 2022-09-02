const btn = document.getElementById("button");
const resButton = document.getElementById("Resetbutton");
const display = document.getElementById("message");

btn.addEventListener("click", function calculate(e) {
  e.preventDefault();
  const price = parseInt(document.getElementById("Money").value, 10);
  const money = parseInt(document.getElementById("Amount").value, 10);

  const litrs = Math.floor(money / price);

  litrs > 10
    ? (display.textContent = `you could get about ${litrs} liters, good, now you can escape`)
    : (display.textContent = `you could get about ${litrs} liters, ups you have to stay here`);
});

resButton.addEventListener("click", function clearForm() {
  display.textContent = "";
});
