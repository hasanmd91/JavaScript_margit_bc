// 1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

// 2. Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.

let results = "";
let end = 98;

for (let i = 2; i < end; i += 2) {
  results += "  " + i + " ";
  results += " " + end + " ";
  end -= 2;
}
console.log(results);
// 3. Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for
// the distance. (After getting 0, the program does not ask anything from the user.)

let avaerageSpeed = 0;

for (let i = 0; ; i++) {
  let distance = Number.parseInt(window.prompt("enter your distance "));

  if (distance === 0) {
    break;
  }

  let time = Number.parseInt(
    window.prompt("enter your time in hour ex: 2hour or so ")
  );

  avaerageSpeed = distance / time;
  console.log(avaerageSpeed);
}

// 4. Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.
let even = 0;

for (let counter = 0; counter < 5; counter++) {
  let input1 = Number.parseInt(prompt("Enter your number dear user"));
  if (input1 % 2 == 0) {
    even++;
  }
}
console.log(even);

// 5.  Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

let sum5 = 0;
let avaerage5;
let count5 = 0;

for (let i = 0; ; i++) {
  let Number55 = Number.parseInt(prompt("Enter your number"));

  if (Number55 === 0) {
    break;
  } else {
    sum5 += Number55;
    count5++;
    avaerage5 = Number55 / count5++;
  }
}

console.log(avaerage5);

// 6 .Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

let sum6 = 0;
let average6;
let count6 = 0;

for (let i = 0; i <= 25; i++) {
  let number6 = Number.parseInt(window.prompt("Enter your number"));

  sum6 += number6;
  count6++;
  average6 = sum6 / count6;
}

console.log(average6);

// 7. Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y,
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
// 8.Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out
//the smallest number that user gave.

let number = Number.parseInt(window.prompt("How many time you want to input"));
let smallest__number = 0;
let firstNumber = 0;

for (let i = 0; i < number; i++) {
  let inputNumber = Number.parseInt(window.prompt("Enter your number"));
  if (inputNumber > firstNumber) {
    smallest__number = inputNumber;
  } else if (inputNumber < smallest__number) {
    smallest__number = inputNumber;
  }
}
console.log(smallest__number); // need to repair

// 9. Make a program that asks ten numbers and in the end prints out two biggest numbers.

let first_biggest_number = 0;
let second_biggest_number = 0;

for (let i = 0; i <= 10; i++) {
  let number = Number.parseInt(window.prompt("Enter your number"));

  if (number > first_biggest_number) {
    second_biggest_number = first_biggest_number;
    first_biggest_number = number;
  } else if (number > second_biggest_number) {
    second_biggest_number = number;
  }
}
console.log(first_biggest_number);
console.log(second_biggest_number);

// 10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.
let sum = 0;
let count = 0;
let average = 0;
let biggest_number = 0;
let smallest_number = 0;

for (let i = 0; i <= 10; i++) {
  let number = Number.parseInt(window.prompt("Enter a number "), 10);

  sum += number;
  count++;
  average = sum / count;

  if (number > biggest_number) {
    biggest_number = number;
    smallest_number = biggest_number;
  } else if (number < smallest_number) {
    smallest_number = number;
  }
}

console.log(sum);
console.log(count);
console.log(average);
console.log(biggest_number);
console.log(smallest_number);
