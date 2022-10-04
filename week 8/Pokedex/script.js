const cards = document.querySelector(".cards");
const error = document.querySelector(".err");
const search = document.querySelector("#search");
const result = document.querySelector("#result");
const buttons = document.querySelectorAll(".genButton");
let pokemon = {};

let url = "https://pokeapi.co/api/v2/";

buttons.forEach((button) => {
  const ButtonValue = button.getAttribute("data-value");
  button.addEventListener("click", () => {
    cards.innerHTML = "";

    fetch(`https://pokeapi.co/api/v2/generation/${ButtonValue}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.pokemon_species.map((poke) => {
          const pokeName = poke.name;
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then((res) => {
              return res.json();
            })

            .then((data) => {
              console.log(data.length);
              if (data.types.length > 1) {
                pokemon = {
                  name: data.species.name,
                  image: data.sprites.other.home.front_default,
                  type1: data.types[0].type.name,
                  type2: data.types[1].type.name,
                };
                cards.innerHTML += `<div class="card">
                <div class="imgContainer">
                  <img src=${pokemon.image} alt="" />
                </div>
                <div class="infoConatiner">
                  <p>${pokemon.name.toUpperCase()}</p>
                  <p>${pokemon.type1}</p>
                  <p>${pokemon.type2}</p>
            
                </div>
              </div>`;
              } else if (data.types.length == 1) {
                pokemon = {
                  name: data.species.name,
                  image: data.sprites.other.home.front_default,
                  type1: data.types[0].type.name,
                };
                cards.innerHTML += `<div class="card">
                <div class="imgContainer">
                  <img src=${pokemon.image} alt="" />
                </div>
                <div class="infoConatiner">
                  <p>${pokemon.name.toUpperCase()}</p>
                  <p>${pokemon.type1}</p>
                </div>
              </div>`;
              }
            });
        });
      });
  });
});
