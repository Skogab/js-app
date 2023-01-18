
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let pokemonListElement = $('.pokemon-list'); 


  function add(pokemon) {
    pokemonList.push(pokemon);
    }

  function getAll() {
    return pokemonList;
}




//addListItem 

function addListItem(pokemon) {
  let listItem = $('<li class="list-group-item"></li>');
  let button = $('<button class="pokemon-button btn btn-primary" data-target="pokemon-modal" data-toggle="modal">' + pokemon.name +  '</button>');
  listItem.append(button);
  pokemonListElement.append(listItem);  
  button.on('click', function() {
      showDetails(pokemon);
  });
}


// function loadList

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json(); 
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
        };
        add(pokemon);

      });
    }).catch(function (e) {
      console.error(e);
    })
  }


// Hey Christopher, I think this is where the problem starts. I have looked at the modal from the course and also the js code (also the solutions of other students) but I have a knot in my head here. I don't even know if the references I created in the following section are correct. 
//Also the code seems to have errors, according to VSC.
//Especially the part from "Creating Element" is difficult for me, could you help me?



//funtion Modal

function showDetailsModal(item) {
  let modalBody = $(".modal-body");
  let modalTitle = $(".modal-title");
  let modalHeader = $(".modal-header");

  // empty content now
  modalTitle.empty();
  modalBody.empty();
  // done emtpy


// creating element for name in Modal
  let name = $(<h1> + item.name +</h1>)

// creating image in Modal 
let imageUrl = $("<img class="modal-img" style=" width:50%">");

// creating height in Modal 
let heightElement = $("<p> + "height : " + item.height + "</p>");

// creating type in Modal 
let typesElement = $("<p> + ".item.types : " + item.types + "</p>");

// creating abilities in Modal 
let abilitiesElement = $("<p> + "abilities : " + item.abilities + "</p>");


//append
modalBody.appendChild(imageUrl);
modalText.appendChild(heightElement);
modalText.appendChild(typesElement);
modalText.appendChild(abilitiesElement);

}



// function LoadList(item)

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types.map((type) => type.type.name);
      item.abilities = details.abilities.map((abilities) => abilities.ability.name);
    }).catch(function (e) {
      console.error(e);
    });
  }




// function showDetails(item)

  function showDetails(item) {
         loadDetails(pokemon).then(function () {
            showDetailsModal(pokemon);
        });
    }





  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();


pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});