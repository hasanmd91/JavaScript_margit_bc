const calculator = (value, id) => {
  value = parseFloat(value);

  if (id === "celsius") {
    document.getElementById("fahrehenit").value = (value * 1.8 + 32).toFixed(2);
    document.getElementById("kelvin").value = (value + 273.15).toFixed(2);
  } else if (id === "fahrehenit") {
    document.getElementById("celsius").value = ((value - 32) / 1.8).toFixed(2);
    document.getElementById("kelvin").value = (
      (value - 32) / 1.8 +
      273.15
    ).toFixed(2);
  } else if (id === "kelvin") {
    document.getElementById("celsius").value = (value - 273.15).toFixed(2);
    document.getElementById("fahrehenit").value = (
      (value - 273.15) * 1.8 +
      32
    ).toFixed(2);
  }
};
