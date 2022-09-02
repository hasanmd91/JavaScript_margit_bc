const addOrEven = (Number) => {
  if (Number >= 0 && Number % 2 === 0) {
    console.log("number...is even");
  } else {
    console.log("number is odd");
  }
};

const checknumber = () => {
  const Number = parseInt(window.prompt("Enter a number "));

  addOrEven(Number);
};

checknumber();
