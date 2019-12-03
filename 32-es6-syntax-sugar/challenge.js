/**
 * In these challenges, you're tasked with refactoring the code
 * There are multiple techniques you could with each
 * Ask your instructor for how you will be grouped and answer each challenge
 * Use the techniques from the README
 * 
 * RULES:
 * 1. You must switch the scribe in your group after every challenge 
 *    Do not repeat until everyone has written
 * 2. You only need to write the relevant part(s) of the code
 * 3. You'll be given partial credit if the target technique was not used 
 */









 

/***************** CHALLENGE 1 *****************/

function renderSinglePokemon(pokemon) {
    /**
     * Takes a pokemon object with keys name (string), id (int) and sprites (object with keys front and back strings)
     * returns string of HTML for pokemon 
     */
    const { id, name:{front, last, middle}, sprites: {front}} = pokemon 
    return (`
    <div class="pokemon-card" id=${id}>
      <div class="pokemon-frame">
        <h1 class="center-text">${front} ${sprites}</h1>
        <div class="pokemon-image">
          <img data-id="${id}" data-action="flip" class="toggle-sprite" src="${front}">
        </div>
        <button data-action="delete" class="pokemon-button">Delete</button>
      </div>
    </div>`)
  }

  const BULBASAUR = {
      id: 1,
      name: {front: 'Bulbasaur', last: "Ketchum"},
      sprites: {
          front: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
          back: ''
      }
  }

  console.log('\n\n********** PROBLEM 1 **********\n')
  console.log(renderSinglePokemon(BULBASAUR))
  console.log('******************************\n')



/***************** CHALLENGE 2 *****************/
// this is NOT the whole function 
function addNewPokemon(){

    // helper lines of code
    let document = {}
    // document.getElementById = () => {return {value: undefined}}
    document.getElementById = () => ({value: undefined})

    // helper lines of code


    let name = document.getElementById('name-input').value || 'Sebastian'
    let front = document.getElementById('sprite-input').value || 'https://cdn.pixabay.com/photo/2013/07/13/13/32/demon-161049_960_720.png'

    let requestBody = JSON.stringify({
        name,
        'sprites': {
          front
        }
      })

    return requestBody
}
console.log('********** PROBLEM 2 **********\n')
console.log(addNewPokemon())
console.log('******************************\n')




/***************** CHALLENGE 3 *****************/
function fizzBuzzSingle(num){
    // TERNARY...... SO GROSS THO
    /** if multiple of 3 print fizz, if multiple of 5 print buzz, if both fizzbuzz */
    if( num%3 === 0 && num%5 === 0 ){
        console.log('FizzBuzz')
    } else if (num%5 === 0) {
        console.log('Buzz')
    } else if (num%3 === 0) {
        console.log('Fizz')
    } else {
        console.log(num)
    }
}

console.log('********** PROBLEM 3 **********\n')
console.log('original fuction -----> ')
fizzBuzzSingle(6)
fizzBuzzSingle(10)
fizzBuzzSingle(12)
fizzBuzzSingle(13)
fizzBuzzSingle(15)
console.log('******************************\n')



/***************** CHALLENGE 4 *****************/

function removeIdentifiers(person) {
    const {name, gender, age, ...theRest} = person
    // if(person['name']){
    //     delete person['name']
    // }
    // if (person['gender']){
    //     delete person['gender']
    // }
    // if (person['age']){
    //     delete person['age']
    // }
    return theRest
}

let gryffindor = [
    {name: 'Hermione', age:'16', gender: 'F', avg: 'O', pet: 'cat'},
    {name: 'Ron', age:'17', gender: 'M', avg: 'T', pet: 'rat'},
    {name: 'Harry', age:'16', gender: 'M', avg: 'EE', pet: 'owl'},
    {name: 'Ginny', age:'14', gender: 'F', avg: 'A', pet: 'lizard'},
]

console.log('********** PROBLEM 4 **********\n')
console.log('original function ---->', gryffindor.map(student => removeIdentifiers(student)))
console.log('******************************\n')




/***************** CHALLENGE 5 *****************/
// JS Date months start at 0 (So December is 11)
const birthdays= [
    [1931, 9, 09],
    [1956, 7, 16],
    [1982, 3, 25, 14, 12, 07],
    [1988, 6, 11],
    [2006, 1, 05, 07, 14, 15]
]

// REFERENCE
// new Date(year, month, day, hours, minutes, seconds, milliseconds)

const jsDateBdays = birthdays.map(function([year, month, day]) {return new Date(year, month, day)})
const jsDateBdays = birthdays.map(function(dateInfo) {return new Date(...dateInfo)})


console.log('********** PROBLEM 5 **********\n')
console.log(jsDateBdays)
console.log('******************************\n')




// REFERENCE FROM LECTURE
// const name = () => console.log('yo'),
//     sign = () => console.log('gemini');

// name()
// sign()