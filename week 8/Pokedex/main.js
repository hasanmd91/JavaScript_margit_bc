const cards = document.querySelector(".cards");
const error = document.querySelector(".err");
const search = document.querySelector("#search");
const result = document.querySelector("#result");
const buttons = document.querySelectorAll(".genButton");

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

search.addEventListener("keyup", (e) => {
  let input = e.target.value.toLowerCase();
  const pokeCards = document.querySelectorAll(".card");
  pokeCards.forEach((element) => {
    let pokeManName = element.children[1].children[0].innerHTML.toLowerCase();
    const isVisible = pokeManName.includes(input);
    element.classList.toggle("hide", !isVisible);
  });
});

const displayPokemon = (pokemonss) => {
  cards.innerHTML = "";
  Promise.all(pokemonss).then((result) => {
    result.map((data) => {
      cards.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
      <div class="imgContainer">
        <img src=${
          data.sprites.other["official-artwork"].front_default
        } alt="" />
      </div>
      <div class="infoConatiner">
        <p>${data.name[0].toUpperCase() + data.name.slice(1)}</p>
        <div>${data.types
          .map(
            (type) =>
              '<img src="./icons/' +
              type.type.name +
              ".svg" +
              '" class="icons"/>'
          )
          .join("")} </div>
      </div>
    </div>`
      );
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
  }, 500);
};

buttons.forEach((button) => {
  const btn = button.getAttribute("data-value");
  button.addEventListener("click", () => {
    fetchPokemons(btn);
  });
});
