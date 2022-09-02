// taking input

const customerInput = () => {
  const salary = parseInt(window.prompt(" Enter your hourle salary"));
  const hours = parseInt(window.prompt(" Enter your working hours"));

  salarycalculation(salary, hours);
};

//calculation

const salarycalculation = (salary, hours) => {
  if (hours <= 7) {
    console.log(hours * salary);
  } else if (hours > 7 && hours <= 10) {
    const percentagetoget = 50;
    const extrahour = hours - 7;
    const extrahoursalrynormal = extrahour * salary;
    const extrahoursalarywithbonus =
      extrahoursalrynormal + (percentagetoget / 100) * extrahoursalrynormal;
    const normalsalary = 7 * salary;
    const Alltogethersalary = normalsalary + extrahoursalarywithbonus;

    console.log(Alltogethersalary);
  } else if (hours > 10) {
    const percentagetoget = 100;
    const extrahour = hours - 7;
    const extrahoursalrynormal = extrahour * salary;
    const extrahoursalarywithbonus =
      extrahoursalrynormal + (percentagetoget / 100) * extrahoursalrynormal;
    const normalsalary = 7 * salary;
    const Alltogethersalary = normalsalary + extrahoursalarywithbonus;
    console.log(Alltogethersalary);
  }
};

customerInput();

// const extrahour = hours - 7
//const  extrahoursalrynormal = extrahour * salary
// const extrahoursalarywithbonus = extrahoursalrynormal +  (50/100) * extrahoursalrynormal
//const normalsalary = 7*salary
//const Alltogethersalary = normalsalary + extrahoursalarywithbonus
