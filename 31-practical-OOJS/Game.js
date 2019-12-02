class Game {
    constructor(game){
      this.name = game.name
      this.description = game.description
      this.img_url = game.img_url
      this.likes = game.likes
      this.id = game.id
  
      Game.all.push(this)
    }
  
    render(container){
      const tile = document.createElement("div")
      tile.className = "tile"
  
      const str = `
          <h4>${this.name}<button data-action="delete" data-id=${this.id} class="close">X</button></h4> 
          <p>${this.description}</p>
          <div class="image-wrapper">
            <img src="${this.img_url}" alt="${this.name}">
          </div>
          <p>Likes: <span class="count">${this.likes}</span></p>
  
          <button data-action="like" data-id=${this.id} class="like button">Like</button>
      `
  
      tile.innerHTML = str
  
      this.element = tile
  
      container.append(tile)
    }
  
    like(){
      this.likes++
      this.element.querySelector(".count").innerText = this.likes
    }
  
    remove(){
      this.element.remove()
    }
  
  
    static find(id){
      return Game.all.find(game => game.id === parseInt(id))
    }
  
  
  
    static all = []
  }