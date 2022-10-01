const cards = document.querySelector(".cards");
const error = document.querySelector(".err");
const search = document.querySelector("#search");
const buttons = document.querySelectorAll(".genButton");
let url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

let pokemonsArray = [];

const createPokemons = (pokemon) => {
  pokemonsArray.push(pokemon);
};

const getPokemon = () => {
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("data could not be fetched");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      const pokemonArray = data.results;
      console.log(pokemonArray);
      pokemonArray.map((pokemon) => {
        fetch(pokemon.url)
          .then((result) => {
            if (!result.ok) {
              throw new Error("could not fetch new url");
            } else {
              return result.json();
            }
          })
          .then((data) => {
            let pokemon = {
              name: data.species.name,
              image: data.sprites.other.home.front_default,
              type: data.types[0].type.name,
            };

            createPokemons(pokemon);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

getPokemon();

const createCards = () => {
  pokemonsArray.map((pokemon) => {
    cards.innerHTML += `<div class="card">
    <div class="imgContainer">
      <img src=${pokemon.image} alt="" />
    </div>
    <div class="infoConatiner">
      <p>${pokemon.name.toUpperCase()}</p>
      <p>${pokemon.type}</p>
      
    </div>
  </div>`;
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    text = button.textContent;
    createCards();
  });
});
