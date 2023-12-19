let pokemonRepository = (function () {
  let pokemonList = [
    { name: "Pikachu", height: 0.4, types: ["electric"] },
    { name: "Umbreon", height: 1, types: ["dark"] },
    { name: "Gallade", height: 1.6, types: ["psychic", "fighting"] },
  ];
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  function getAll() {
    return pokemonList;
  }
  return {
    add: add,
    getAll: getAll,
  };
})();
console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "Ditto" });
console.log(pokemonRepository.getAll());

// for (let i = 0; i < pokemonList.length; i++) {
//   if (pokemonList[i].height < 1.7 && pokemonList[i].height > 0.9) {
//     document.write("Whoa, " + pokemonList[i].name + " is a big pokemon.");
//   } else if (pokemonList[i].height > 1.2) {
//     document.write("Wow, " + pokemonList[i].name + " is a average pokemon.");
//   } else {
//     document.write("Aw, " + pokemonList[i].name + " is a small pokemon.");
//   }
// }
pokemonList.forEach(function (item) {
  document.write(" " + item.name + " is a cool pokemon.");
});
