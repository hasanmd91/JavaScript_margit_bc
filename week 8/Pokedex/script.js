const cards = document.querySelector(".cards");
const error = document.querySelector(".err");
const search = document.querySelector("#search");
let url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

const createCards = (name, image) => {
  cards.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
  <div class="imgContainer">
    <img src=${image} alt="" />
  </div>
  <div class="infoConatiner">
    <p>${name.toUpperCase()}</p>
  </div>
</div>`
  );
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
      console.log(data.results);
      pokemonArray.map((pokemon) => {
        fetch(pokemon.url)
          .then((result) => {
            if (!result.ok) {
              throw new Error("could not fetch new url");
            } else {
              return result.json();
            }
          })
          .then((newdata) => {
            const name = newdata.species.name;
            const image = newdata.sprites.other.home.front_default;
            createCards(name, image);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

getPokemon();
