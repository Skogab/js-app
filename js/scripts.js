


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


function add (pokemon) {
pokemonList.push(pokemon);
}

return {
  add: add,
  getAll: getAll
}


}) ();



pokemonRepository.getAll().forEach(function(pokemon){
  if(pokemon.height > 1.9){
    document.write(pokemon.name + ' (height: '+ pokemon.height + ') - Wow, this is big!' + '<br>')
  }
  else {
   
    document.write(pokemon.name + ' (height: '+ pokemon.height+ ') <br>')
  }
}
)
    
    