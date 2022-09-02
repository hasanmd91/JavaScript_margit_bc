const form = document.querySelector("#form");
const Name = document.querySelector("#customerName");
const select = document.querySelector("select");
const orderDetails = document.querySelector("#orderdetails");
let Sizes = document.querySelectorAll('[name="pizza"]');
let toppings = document.querySelectorAll('input[type = "checkbox"]');

let count = 0;
let pizzaPrice = 0;
let pizzaSizes = "";
let pizzaToppings = [];

const orderPizza = (e) => {
  let customerName = Name.value;
  console.log(customerName);
  Sizes.forEach((pizza) => {
    if (pizza.checked && pizza.id === "for2") {
      pizzaPrice = 7.5;
      pizzaSizes = "For two ";
    } else if (pizza.checked && pizza.id === "for4") {
      pizzaPrice = 10.5;
      pizzaSizes = "For four ";
    } else if (pizza.checked && pizza.id === "for6") {
      pizzaPrice = 12.5;
      pizzaSizes = "For six ";
    } else if (pizza.checked && pizza.id === "for8") {
      pizzaPrice = 15.5;
      pizzaSizes = "For eight ";
    }
  });

  toppings.forEach((top) => {
    if (top.checked) {
      let ingredients = top.id;
      pizzaToppings.push(ingredients);
    }
  });

  if (pizzaToppings.length > 4) {
    for (let i = 4; i < pizzaToppings.length; i++) {
      pizzaPrice += 0.5;
    }
  }
  // final price calculation

  let deliveryMethod = select.options[select.selectedIndex].id;
  let extraPrice = parseInt(select.options[select.selectedIndex].value);
  pizzaPrice += extraPrice;

  //oreder details

  orderDetails.innerHTML = `
  <div class="newDetails">  <h2> Thank you for order </h2> 
  <p> Customer name : <span> ${customerName} </span>  </p>
  <p> Pizza ingredients: <span> ${pizzaToppings.join()}  </span>  </p>
  <p> Delivery Method: <span>  ${deliveryMethod}   </span>  </p>
  <p>  Total price: <span> ${pizzaPrice} €  </span>  </p>
  <p> we will shortly making your delicious pizza ready </p>

  </div> `;

  // reseting form and array
  e.preventDefault();
  form.reset();
  pizzaToppings = [];
};

form.addEventListener("submit", orderPizza);
