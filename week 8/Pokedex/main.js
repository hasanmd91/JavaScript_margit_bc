const cards = document.querySelector(".cards");
const error = document.querySelector(".err");
const search = document.querySelector("#search");
const result = document.querySelector("#result");
const buttons = document.querySelectorAll(".genButton");
const card2 = document.querySelector(".card2");
let datas = [];
let generations = [
  { limit: 151, offset: 0 },
  { limit: 100, offset: 151 },
  { limit: 135, offset: 251 },
  { limit: 107, offset: 386 },
  { limit: 156, offset: 493 },
  { limit: 72, offset: 649 },
  { limit: 88, offset: 721 },
  { limit: 96, offset: 809 },
  { limit: 3, offset: 905 },
];

const displayPokemon = (pokemonss) => {
  cards.innerHTML = "";
  Promise.all(pokemonss).then((result) => {
    result.map((data) => {
      cards.innerHTML += `<div class="card">
      <div class="imgContainer">
        <img src=${
          data.sprites.other["official-artwork"].front_default
        } alt="" />
      </div>
      <div class="infoConatiner">
        <p>${data.name.toUpperCase()}</p>
      </div>
    </div>`;
    });
  });
};

const fetchPokemons = async (btn) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${generations[btn].limit}&offset=${generations[btn].offset}`
  )
    .then((res) => res.json())
    .then((data) => data.results);

  const pokemons = await response.map((poke) => {
    return fetch(poke.url)
      .then((res) => res.json())
      .then((data) => data);
  });

  displayPokemon(pokemons);
  setTimeout(() => {
    result.innerHTML = `${generations[btn].limit} pokemons were found...`;
    search.style.visibility = "visible";
  }, 1000);
};

buttons.forEach((button) => {
  const btn = button.getAttribute("data-value");
  button.addEventListener("click", () => {
    fetchPokemons(btn);
  });
});
