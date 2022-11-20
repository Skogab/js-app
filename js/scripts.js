let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "Machop",
      height: 0.4,
      type: ["Fighting"],
    },

    {
      name: "Metapod",
      height: 0.7,
      type: ["Bug"],
    },

    {
      name: "Ekans",
      height: 2,
      type: ["Poison"],
    },

    {
      name: "Natu",
      height: 0.2,
      type: ["Flying"],
    },

    {
      name: "Regice",
      height: 1.8,
      type: ["Ice"],
    },
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
