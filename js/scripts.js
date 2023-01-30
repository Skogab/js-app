let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  let pokemonListElement = $(".pokemon-list");

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  //addListItem

  function addListItem(pokemon) {
    let listItem = $('<li class="list-group-item"></li>');
    let button = $(
      '<button class="pokemon-button btn btn-primary" data-toggle="modal" data-target="#exampleModal">' +
        pokemon.name +
        "</button>"
    );
    listItem.append(button);
    pokemonListElement.append(listItem);
    button.on("click", function () {
      showDetails(pokemon);
    });
  }

  // function loadList

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //funtion Modal

  function showDetailsModal(item) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");

    // empty content now
    modalTitle.empty();
    modalBody.empty();

    //append

    const nameParagraph = document.createElement("p");
    const nameNode = document.createTextNode(`${item.name}`);

    const heightParagraph = document.createElement("p");
    const heightNode = document.createTextNode(`${item.height} ft`);

    nameParagraph.appendChild(nameNode);
    heightParagraph.appendChild(heightNode);
    modalBody.append(nameParagraph);
    modalBody.append(heightParagraph);
  }

  // function LoadList(item)

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types.map((type) => type.type.name);
        item.abilities = details.abilities.map(
          (abilities) => abilities.ability.name
        );
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // function showDetails(item)

  function showDetails(pokemon) {
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
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
