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

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height >= 1.8) {
    document.write(
      pokemonList[i].name +
        " (height: " +
        pokemonList[i].height +
        " m) - Wow, that is big!" +
        "<br>"
    );
  }
}
