// Make a program that asks for three numbers from the user.
//  The program prints out the sum of the numbers if any of
//  the numbers are positive. If all the numbers are positive, also print out multiplication.
//  If all numbers are negative, the text “only negatives” is printed.
//  Handle zero as positive in this assignment.

const NumberInput = () => {
  const one = parseInt(window.prompt("enter first number"));
  const two = parseInt(window.prompt("enter second  number"));
  const three = parseInt(window.prompt("enter third number"));
  ThreeNumbers(one, two, three);
};

function ThreeNumbers(x, y, z) {
  if (x >= 0 && y >= 0 && z >= 0) {
    let sum = 0;
    let multiplication = 0;
    sum = x + y + z;
    multiplication = x * y * z;
    console.log(sum);
    console.log(multiplication);
  } else if (x < 0 && y < 0 && z < 0) {
    console.log("only negatives ");
  }
}

NumberInput();
