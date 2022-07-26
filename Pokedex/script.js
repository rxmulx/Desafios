const pokemonName = document.querySelector('.pokemon-data__pokemon-name')
const pokemonNumber = document.querySelector('.pokemon-data__pokemon-number')
const pokemonImg = document.querySelector('.main__pokemon');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let pokemon1 = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
    }
}

const renderPokemon = async (pokemon) => {

    pokemonName.innertHTML = 'Loading...';
    pokemon.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if (data)  {
        pokemonImg.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = '';
        pokemon1 = data.id;
    } else {
        pokemonImg.styled.display = 'none';
        pokemonName.innerHTML = 'Not Found :c'
        pokemonName.innerHTML = '';
    }
}

form.addEventListener('submit', (event) => {
    event.presetDefault();
    renderPokemon(input.value.toLowerCase());
})

buttonPrev.addEventListener('click', () => {
    if(pokemon1 > 1) {
        pokemon1 -= 1
        renderPokemon(pokemon1)
    }
});

buttonNext.addEventListener('click', () => {
    pokemon1 ++
    renderPokemon(pokemon1)
});

renderPokemon(pokemon1);

