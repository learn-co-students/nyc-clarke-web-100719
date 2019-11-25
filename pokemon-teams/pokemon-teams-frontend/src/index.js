const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const mainContainer = document.querySelector('main')

// forEach vs map

// map will return a new array collecting the return values from its callback function
// forEach just does some stuff and returns undefined 

function createPokemonHTML(pokemons){ // separation of concerns. this JUST CREATES THE STRINGS
    return pokemons.map(function(pokemon){
        return `
            <li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id=${pokemon.id}>Release</button></li>
        `
    })
}

function renderTrainer(trainer){
    // just get the return value and create one big string 
    let allPokemonHTML = createPokemonHTML(trainer.pokemons).join('')

    let trainerHTML = `
        <div class="card" data-id=${trainer.id}><p>${trainer.name}</p>
            <button class="add" data-trainer-id=${trainer.id}>Add Pokemon</button>
            <ul>
                ${allPokemonHTML}
            </ul>
        </div>
    `
    // mainContainer.innerHTML = trainerHTML
    // this does NOT work because this resets the innerHTML each time so you'll only ever see 1 trainer

    // Either of the below work
    mainContainer.insertAdjacentHTML('beforeend', trainerHTML)
    // mainContainer.innerHTML += trainerHTML

}

fetch(TRAINERS_URL)
    .then(function(res) { return res.json() })
    .then(function(data){
        data.forEach(function(trainer) {renderTrainer(trainer)})
        // EQUIVALENT ===> data.forEach(renderTrainer)

    })


mainContainer.addEventListener('click', function(event){
    if(event.target.className === 'add'){
        let numPokemon = event.target.closest('.card').querySelectorAll('li').length;
        if (numPokemon < 6) {
            // console.log(event.target.dataset)
            fetch(POKEMONS_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "trainer_id": event.target.dataset.trainerId
                  })
            })
            .then(function(res) { return res.json() })
            .then(function(data) {
                // INTERPOLATE OUR NEW POKEMON INTO SOME HTML
                let newPokeHTML = `<li>${data.nickname} (${data.species}) <button class="release" data-pokemon-id=${data.id}>Release</button></li>`
                
                // FIND THE CLOSEST UL TO THE BUTTON WE CLICKED VIA THE TRAINER CARD
                let pokeList = event.target.closest('.card').querySelector('ul')

                // EITHER OF THE BELOW WORK TO ADD THE NEW POKEMON TO THE PAGE 
                // pokeList.innerHTML += newPokeHTML
                pokeList.insertAdjacentHTML('beforeend', newPokeHTML)
            })
        } else {
            alert('You can only have 6 pokemon per trainer. Please release some first.')
        }
    } else if(event.target.className === 'release'){
        console.log('release the kraken')
        // know the pokemon Id 
        // send a DELETE fetch request to the right endpoint
        // update the frontend to remove the whollllle li that holds that pokemon
        // event.target is the button 

        let pokemonId = event.target.dataset.pokemonId

        fetch(POKEMONS_URL + `/${pokemonId}`, {
            method: 'DELETE'
        })
        .then(function(res) { return res.json()})
        .then(function(data) {
            let pokemonListItem = event.target.closest('li')
            pokemonListItem.remove()
            // console.log('parent LI for the whole pokemon', pokemonListItem)
            // console.log(data)
        })
    }
})
