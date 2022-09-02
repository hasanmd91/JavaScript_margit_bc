// Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y,
//the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.
let questions21 = false;
let question = true;
let count7 = 0;
let sum7 = 0;
let average7 = 0;

do {
  let number1 = Number.parseInt(window.prompt("Enter your number"));
  count7++;
  sum7 += number1;
  average7 = sum7 / count7;

  let questions = window.prompt("Do you want to continue giving numbers?(y/n)");
  if (questions === "y") {
    question = true;
  } else if (questions === "n") {
    question = false;
  } else {
    do {
      questions21 = true;
      let questions13 = window.prompt(
        "Do you want to continue giving numbers?(y/n)"
      );
      if (questions13 === "y") {
        questions21 = false;
        question = true;
      } else if (questions13 === "n") {
        questions21 = false;
        question = false;
      }
    } while (questions21);
  }
} while (question);

console.log(average7);
