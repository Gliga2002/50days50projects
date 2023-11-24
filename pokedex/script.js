const pokeContainer = document.getElementById('poke-container');
const POKEMONCOUNT = 150;
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
}

const mainTypes = Object.keys(colors);

// on je ovu fju stavio async
const fetchPokemons = () => {
  for (let i = 1; i <= POKEMONCOUNT; i++) {
    // a ovde await
     getPokemon(i);
  }
}

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
}

const createPokemonCard = (pokemon) => {
  
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  const pic = pokemon.id.toString().padStart(3, '0');
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1).toLowerCase();

  // prolazim kroz neki kompleksan array objekta i pravim novi array sa lepsim podacima. To radi map!!!
  // ["fire, grass"]
  const pokeTypes = pokemon.types.map(type => type.type.name);

  const type = mainTypes.find(type => pokeTypes.indexOf(type) > -1);
  const color = colors[type];

  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHTML = `
    <div class="img-container">
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pic}.png" alt="">
    </div>
    <div class="info">
      <span class="number">#${pic}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${type}</span></small>
    </div>
  `;

  pokemonEl.innerHTML = pokemonInnerHTML;

  pokeContainer.appendChild(pokemonEl);


  
};

fetchPokemons();
