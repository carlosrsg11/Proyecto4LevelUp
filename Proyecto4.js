const container = document.querySelector('.pokemonContainer');

function callPk(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            createPk(data);
        });
}

function createRandomPk(num) {
    for (let i = 1; i <= num; i++) {
        randomPk = Math.floor(Math.random() * 806 + 1);
        callPk(randomPk);
    }
}

function createPk(pokemon) {
    const divi = document.createElement('div');
    divi.classList.add('pkDiv');
    const pkContainer = document.createElement('div');
    pkContainer.classList.add('image');
    const pkImg = document.createElement("img");
    pkImg.src = pokemon.sprites.front_default;
    pkContainer.appendChild(pkImg);    
    const nombre = document.createElement('p');
    nombre.classList.add('nombre');
    nombre.textContent = pokemon.name;       
    divi.appendChild(nombre);
    divi.appendChild(pkContainer);
    container.appendChild(divi);
}

createRandomPk(6);