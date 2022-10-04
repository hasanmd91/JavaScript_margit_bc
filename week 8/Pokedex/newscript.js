const cards = document.querySelector(".cards");
const error = document.querySelector(".err");
const search = document.querySelector("#search");
const result = document.querySelector("#result");
const buttons = document.querySelectorAll(".genButton");
let pokeArray = [];

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

buttons.forEach((button) => {
  const btn = button.getAttribute("data-value");
  button.addEventListener("click", () => {
    cards.innerHTML = "";
    search.style.visibility = "visible";
    result.innerHTML = `${generations[btn].limit} Pokemos are found `;
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${generations[btn].limit}&offset=${generations[btn].offset}`
    )
      .then((res) => res.json())
      .then((data) => {
        data.results.map((res) => {
          fetch(res.url)
            .then((res) => res.json())
            .then((data) => {
              return {
                id: data.id,
                name: data.name,
                img: data.sprites.other["official-artwork"].front_default,
                type: data.types,
              };
            })
            .then((data) => {
              pokeArray.push(data);
            });
        });
      });
  });
});
