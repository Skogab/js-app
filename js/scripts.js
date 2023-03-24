let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";
  let pokemonListElement = $(".pokemon-list");

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  //addListItem

  function addListItem(pokemon) {
    let listItem = $("<div class=\"list-group-item\"></div>");
    let button = $(
      "<button class=\"pokemon-button btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">" +
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

  //function Modal

  function showDetailsModal(item) {
    let modalBody = $(".modal-body");

   
    //append

    const nameParagraph = document.createElement("p");
    const nameNode = document.createTextNode(`${item.name}`);

    const heightParagraph = document.createElement("p");
    const heightNode = document.createTextNode(`${item.height} ft`);

    const img = document.createElement("img");
    img.src = `${item.imageUrl}`;
    img.classList.add("image-modal");

  

    nameParagraph.appendChild(nameNode);
    heightParagraph.appendChild(heightNode);
    modalBody.append(nameParagraph);
    modalBody.append(img)
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

 // empty content now
 // eslint-disable-next-line no-undef
 modalTitle.empty();
 // eslint-disable-next-line no-undef
 modalBody.empty();



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