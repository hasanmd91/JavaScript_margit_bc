const calculator1 = (value) => {
  value = parseFloat(value);

  document.getElementById("celsius").value = value.toFixed(2);
  document.getElementById("fahreheit").value = (value * 1.8 + 32).toFixed(2);
  document.getElementById("kelvin").value = (value + 273.15).toFixed(2);
};

const calculator2 = (value) => {
  value = parseFloat(value);

  document.getElementById("celsius").value = ((value - 32) / 1.8).toFixed(2);
  document.getElementById("fahreheit").value = value.toFixed(2);
  document.getElementById("kelvin").value = (
    (value - 32) / 1.8 +
    273.15
  ).toFixed(2);
};

const calculator3 = (value) => {
  value = parseFloat(value);

  document.getElementById("celsius").value = (value - 273.15).toFixed(2);
  document.getElementById("fahreheit").value = (
    (value - 273.15) * 1.8 +
    32
  ).toFixed(2);
  document.getElementById("kelvin").value = value.toFixed(2);
};
