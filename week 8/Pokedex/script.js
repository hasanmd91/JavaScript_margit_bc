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

const createPokemons = (pokemons) => {
  cards.innerHTML = "";
  pokemons.map((pokemon) => {
    cards.innerHTML += `<div class="card">
      <div class="imgContainer">
        <img src=${pokemon.image} alt="" />
      </div>
      <div class="infoConatiner">
        <p>${pokemon.name.toUpperCase()}</p>
        <p> Type:${pokemon.type.map((type) => type.type.name).join(", ")}</p>
      </div>
    </div>`;
  });
};

const fetchPokemons = async (btn) => {
  const response = await axios
    .get(
      `https://pokeapi.co/api/v2/pokemon?limit=${generations[btn].limit}&offset=${generations[btn].offset}`
    )
    .then((res) => {
      return res.data.results;
    })
    .then((results) => {
      return Promise.all(results.map((res) => axios.get(res.url)));
    });

  let pokemons = response.map((data) => {
    return {
      name: data.data.name,
      image: data.data.sprites.other["official-artwork"].front_default,
      type: data.data.types,
    };
  });
  result.innerHTML = `${generations[btn].limit} pokemons were found...`;
  search.style.visibility = "visible";
  createPokemons(pokemons);
};

buttons.forEach((button) => {
  const btn = button.getAttribute("data-value");
  button.addEventListener("click", () => {
    fetchPokemons(btn);
  });
});
