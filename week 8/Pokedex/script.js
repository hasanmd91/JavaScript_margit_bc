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

  let pokemons = [];
  response.map((data) => {
    pokemons.push({
      name: data.data.name,
      image: data.data.sprites.other["official-artwork"].front_default,
      type: data.data.types,
    });
  });
};

buttons.forEach((button) => {
  const btn = button.getAttribute("data-value");
  button.addEventListener("click", () => {
    fetchPokemons(btn);
  });
});
