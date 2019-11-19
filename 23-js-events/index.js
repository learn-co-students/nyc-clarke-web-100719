const data = [
    {
      id: 1,
      name: "Settlers of Catan",
      description: "Friendships will be tested.",
      img_url: "https://crowscastle.com/375-large_default/the-settlers-of-catan.jpg"
    },
    {
      id: 2,
      name: "Monopoly",
      description: "Friendships will end.",
      img_url: "https://i5.walmartimages.com/asr/e9009e67-fbb0-4e96-83c5-5af0eeb13b28_1.f17117ff29f8aa4992cb93bad9205dc4.jpeg"
    },
    {
      id: 3,
      name: "Azul",
      description: "Great fun with the friends!.",
      img_url: "https://cf.geekdo-images.com/itemrep/img/ql-0-t271LVGqbmWA1gdkIH7WvM=/fit-in/246x300/pic3718275.jpg"
    },
    {
      id: 4,
      name: "Life",
      description: "If only I were this good at real life",
      img_url: "https://images-na.ssl-images-amazon.com/images/I/91a5uQnZf2L._SL1500_.jpg"
    }
  ]

/************               RENDER GAME CODE                  ************/
function renderGame(game){
    let gameHTML = `
        <div class="tile">
            <h4>${game.name}</h4>
            <p>${game.description}</p>
            <p>Likes: <span class="counter">0</span></p>
            <div class="image-wrapper">
                <img src=${game.img_url} alt=${game.name}>
            </div>
            <button class="like-button">Like</button>
        </div>
    `
    let container = document.getElementById('container')
    // ANOTHER OPTION ==> container = document.querySelector('#container')

    container.insertAdjacentHTML('beforeend', gameHTML)
    // ANOTHER OPTION ==> container.innerHTML += gameHTML 
}

data.forEach(renderGame)
// ANOTHER OPTION ==> data.forEach(function(game){ renderGame(game)})


/************               LOADER CODE                  ************/
const loader = document.querySelector('#load-button')

// function makeAllGames(){
//     data.forEach(renderGame)
// }
// loader.addEventListener('click', makeAllGames)


// loader.addEventListener('click', function(){ data.forEach(renderGame) })



/************               LIKE BUTTONS CODE                  ************/

// CLICKING just CATANS BUTTON WORKS
let button = document.querySelector('.like-button')
let counterElement = document.querySelector('.counter')

// function updateCounter(){
//     let newCount = parseInt(counterElement.innerText) + 1
//     counterElement.innerText = newCount
// }

// button.addEventListener('click',updateCounter)


//  CLICKING ALL BUTTONS WORKS 
const allButtons = document.querySelectorAll('.like-button')

// ...but is dependent on order being correct so the indexes match in allButtons and allCounters
// allButtons.forEach(function(button, index){
//     button.addEventListener('click', function(){
//         const target = allCounters[index]
//         let newCount = parseInt(target.innerText) + 1
//         target.innerText = newCount
//     })
// })


// this version gets to the specific button and counter by searching inside of the tile parent
// which means we aren't assuming the indexes are the same anymore! 
allTiles.forEach(function(tile){
    let button = tile.querySelector('button')
    let counter = tile.querySelector('.counter')
    button.addEventListener('click', function(){
        let newCount = parseInt(counter.innerText) + 1
        counter.innerText = newCount
    })
})






/*
iterate through data 
data.forEach()

function renderDiv(element){
    create the div, h4 and input the content
    document.createElement('div')
    append them someplace 
    interpolate into that thing down there

    aeppnd h4, p tags, etc to div 
}
*/

/*

*/
  
   
/*
<div class="tile">
    <h4>Settlers of Catan</h4>
    <p>Friendships will be tested</p>
    <p>Likes: <span class="counter">0</span></p>
    <div class="image-wrapper">
        <img src="https://crowscastle.com/375-large_default/the-settlers-of-catan.jpg" alt="catan">
    </div>
    <button class="like-button">Like</button>
</div>
*/
  
  