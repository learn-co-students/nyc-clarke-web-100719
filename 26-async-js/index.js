function sleep(time){
  const start = new Date()
  while (new Date() - start < time){}
}

// console.log('BEFORE SETTIMEOUT')

// async methods we've seen before: setInterval, setTimeout

// ASYNC/NONBLOCKING: setTimeout(function(){ console.log('bout time') }, 0)
// SYNC/BLOCKING: sleep(5000)

// fetch("https://pokeapi.co/api/v2/pokemon/25")
//   .then(function(response){ //whateverisReturnedFromThePromise
//      return response.json() // equivalent JSON.parse() from ruby 
//      // whatever is returned here becomes the parameter of the next callback
//   })
//   .then(function(data){
//     // do all your DOM manipulation stuffs
//     document.body.append(data.name)
//     console.log(data.name)
//   })

/*
 fetch(URI)
  .then(function(response) { return response.json() })
  .then(function(data) {    DO SOME FUN SHTUFFS      })
 */

// console.log("AFTER SETTIMEOUT")



// const data = [
//     {
//       id: 1,
//       name: "Settlers of Catan",
//       description: "Friendships will be tested.",
//       img_url: "https://crowscastle.com/375-large_default/the-settlers-of-catan.jpg"
//     },
//     {
//       id: 2,
//       name: "Monopoly",
//       description: "Friendships will end.",
//       img_url: "https://i5.walmartimages.com/asr/e9009e67-fbb0-4e96-83c5-5af0eeb13b28_1.f17117ff29f8aa4992cb93bad9205dc4.jpeg"
//     },
//     {
//       id: 3,
//       name: "Azul",
//       description: "Great fun with the friends!.",
//       img_url: "https://cf.geekdo-images.com/itemrep/img/ql-0-t271LVGqbmWA1gdkIH7WvM=/fit-in/246x300/pic3718275.jpg"
//     },
//     {
//       id: 4,
//       name: "Life",
//       description: "If only I were this good at real life",
//       img_url: "https://images-na.ssl-images-amazon.com/images/I/91a5uQnZf2L._SL1500_.jpg"
//     }
//   ]


let container = document.getElementById('container')
let form = document.getElementById('new-game')


fetch('http://localhost:3000/games')
  .then(function(response) { return response.json() })
  .then(function(data) { 
      data.forEach(renderGame)
  })
  .catch(function(error){ alert(error)} )

function renderGame(game){
    let gameHTML = `
        <div class="tile">
            <h4>${game.name}<div class="close">X</div></h4>
            <p>${game.description}</p>
            <p>Likes: <span class="counter">${game.likes}</span></p>
            <div class="image-wrapper">
                <img src=${game.img_url} alt=${game.name}>
            </div>
            <button data-id=${game.id} class="like-button">Like</button>
        </div>
    `

    container.insertAdjacentHTML('beforeend', gameHTML)
}




container.addEventListener('click', function(event){

    let tile = event.target.closest('.tile'); // looks for closest ancestor that meets criteria

    if(event.target.className === 'like-button' ){
      // DOM MANIPULATION ALL STAYS THE SAME 
      let counter = tile.querySelector('span.counter');
      let newCounter = parseInt(counter.innerText) + 1
      
      // GOTTA DO SOME SHTUFFS WITH MY BACKEND
      fetch(`http://localhost:3000/games/${event.target.dataset.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          likes: newCounter
        })
      })
      .then(function(response) { return response.json() })
      .then(function(data) {
        console.log('done and happy')
        counter.innerText = newCounter
      })
      .catch(function(error) { alert('There was an error: ', error)})

      // two functions on promises ==> then to handle success, catch to handle errors 

    } else if(event.target.className === 'close' ){
        tile.remove()
        container.appendChild(tile) // turn it into a carousel    
    }
})

form.addEventListener('submit', function(event) {
    event.preventDefault() // stop the page from refreshing 
    let name = event.target.name.value
    let description = event.target.description.value
    let image = event.target.img_url.value

    console.log(name, description, image)
})
