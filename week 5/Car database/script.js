const form = document.getElementById("form");
const tdbody = document.getElementById("data");
const searchResult = document.getElementById("showSearch");

const carDatas = [];
let count = 0;

const searchPlate = () => {
  const search = document.getElementById("search").value;
  if (search.length > 1) {
    carDatas.find((res) => {
      if (res.plate === search) {
        searchResult.innerHTML = `Licence number ${res.plate} is ${res.carMaker} ${res.carModel} and it belongs to ${res.carOwner}; `;
      } else
        searchResult.innerText = `There is no car with that licence plate added to the systeam. Try again? `;
    });
  } else searchResult.innerText = `Enter valid number plate!`;
};

class Car {
  constructor(plate, carMaker, carModel, carOwner, carPrice, carColor) {
    (this.plate = plate),
      (this.carMaker = carMaker),
      (this.carModel = carModel),
      (this.carOwner = carOwner),
      (this.carPrice = carPrice),
      (this.carColor = carColor);
  }
}

form.addEventListener("submit", (e) => {
  const plate = document.getElementById("plate").value;
  const carMaker = document.getElementById("carMaker").value;
  const carModel = document.getElementById("carModel").value;
  const carOwner = document.getElementById("carOwner").value;
  const carPrice = document.getElementById("carPrice").value;
  const carColor = document.getElementById("carColor").value;

  const carDetails = new Car(
    plate,
    carMaker,
    carModel,
    carOwner,
    carPrice,
    carColor
  );
  carDatas.push(carDetails);

  for (let i = count; i < carDatas.length; i++) {
    document.getElementById("data").innerHTML += document.createElement(
      "tr"
    ).innerHTML = `<td>${carDatas[i].plate}  </td>
    <td>${carDatas[i].carMaker}  </td>
    <td>${carDatas[i].carModel}  </td>
    <td>${carDatas[i].carOwner}  </td>
    <td>${carDatas[i].carPrice}  </td>
    <td>${carDatas[i].carColor}  </td> `;
    count++;
  }
  e.preventDefault();
});

//  console.log(plate, carMaker, carModel, carOwner, carPrice, carColor);
//document.getElementById("data").innerHTML = ``;
