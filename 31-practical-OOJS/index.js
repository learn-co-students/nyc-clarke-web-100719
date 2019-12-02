const container = document.querySelector("#container")
const adapter = new APICommunicator("http://localhost:3000")

adapter.getGames()
.then(function(data){
  data.forEach(function(game){
    const newGame = new Game(game)
    newGame.render(container)
  });
})



container.addEventListener("click", function(event){
  if(event.target.dataset.action === "like"){
    const game = Game.find(event.target.dataset.id)
    adapter.likeGame(event.target.dataset.id, game.likes+1)
    .then(function(data){
      game.like()
    })
    .catch(function(error){
      alert(error)
    })
  } else if(event.target.dataset.action === "delete"){
    const game = Game.find(event.target.dataset.id)
    game.remove()

  }
})

document.querySelector("#new-game").addEventListener("submit", function(event){
  event.preventDefault()

  const name = event.target.name.value
  const description = event.target.description.value
  const img_url = event.target.img_url.value

  adapter.createGame(name, description, img_url)
  .then(function(data){
    if (data.errors){
      document.body.append(data.errors)
    } else {
      renderGame(data)
    }
  })

})