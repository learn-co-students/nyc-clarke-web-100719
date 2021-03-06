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
  
  
  let container = document.getElementById('container')
  let form = document.getElementById('new-game')
  
  data.forEach(renderGame)
  
  function renderGame(game){
      let gameHTML = `
          <div class="tile">
              <h4>${game.name}<div class="close">X</div></h4>
              <p>${game.description}</p>
              <p>Likes: <span class="counter">0</span></p>
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
        let counter = tile.querySelector('span.counter');
        let newCounter = parseInt(counter.innerText) + 1
  
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
  