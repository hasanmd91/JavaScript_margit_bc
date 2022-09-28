const cards = document.querySelector(".cards");
const error = document.querySelector(".err");

let url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

const createCards = (pokemon) => {
  cards.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
  <div class="imgContainer">
    <img src="./images/ninja-152415_1280.png" alt="" />
  </div>
  <div class="infoConatiner">
    <p>${pokemon.name.toUpperCase()}</p>
  </div>
</div>`
  );
};

const errMsg = (err) => {
  error.innerHTML = `could not fetch ${err}`;
};

async function getResponse() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      } else {
        return response.json();
      }
    })
    .then((data) => {
      data.results.forEach((pokemon) => {
        createCards(pokemon);
      });
    })
    .catch((err) => {
      errMsg(err);
    });
}

getResponse();
