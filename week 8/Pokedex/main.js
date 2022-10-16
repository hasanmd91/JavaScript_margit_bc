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
const getIcons = (type) => {
  switch (type) {
    case "fire":
      return "https://upload.wikimedia.org/wikipedia/commons/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg";
    case "flying":
      return "https://upload.wikimedia.org/wikipedia/commons/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg";
    case "ground":
      return "https://upload.wikimedia.org/wikipedia/commons/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg";
    case "ice":
      return "https://upload.wikimedia.org/wikipedia/commons/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg";
    case "normal":
      return "https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg";
    case "poison":
      return "https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg";
    case "psychic":
      return "https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg";
    case "rock":
      return "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg";
    case "steel":
      return "https://upload.wikimedia.org/wikipedia/commons/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg";
    case "water":
      return "https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg";
    case "bug":
      return "https://upload.wikimedia.org/wikipedia/commons/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg";
    case "dark":
      return "https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg";
    case "ghost":
      return "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg";
    case "grass":
      return "https://upload.wikimedia.org/wikipedia/commons/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg";
    case "dragon":
      return "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg";
    case "electric":
      return "https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg";
    case "fairy":
      return "https://upload.wikimedia.org/wikipedia/commons/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg";
    case "fighting":
      return "https://upload.wikimedia.org/wikipedia/commons/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg";
    default:
      return "#";
  }
};
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
              '<img src="' + getIcons(type.type.name) + '" class="icons"/>'
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
