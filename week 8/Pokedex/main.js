const cards = document.querySelector(".cards");

let url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

const createCards = (pokemon) => {
  cards.innerHTML += `<div class="card">
  <div class="imgContainer">
    <img src="./images/ninja-152415_1280.png" alt="" />
  </div>
  <div class="infoConatiner">
    <p>${pokemon.name}</p>
  </div>
</div>`;
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
    });
}

getResponse();
