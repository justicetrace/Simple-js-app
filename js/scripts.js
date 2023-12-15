let pokemonList = [
  { name: "Pikachu", height: 0.4, types: ["electric"] },
  { name: "Umbreon", height: 1, types: ["dark"] },
  { name: "Gallade", height: 1.6, types: ["psychic", "fighting"] },
];

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height < 1.7 && pokemonList[i].height > 0.9) {
    document.write("Whoa, " + pokemonList[i].name + " is a big pokemon.");
  } else if (pokemonList[i].height > 1.2) {
    document.write("Wow, " + pokemonList[i].name + " is a average pokemon.");
  } else {
    document.write("Aw, " + pokemonList[i].name + " is a small pokemon.");
  }
}
