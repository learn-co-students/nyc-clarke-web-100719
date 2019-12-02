class APICommunicator {
    constructor(baseUrl){
      this.baseUrl = baseUrl
    }
  
    parseJSON(res){
      return res.json()
    }
  
    getGames(){
      return fetch(this.baseUrl + "/games")
      .then(this.parseJSON)
    }
  
    createGame(name, description, img_url){
      const body = {
        name: name, 
        description: description, 
        img_url: img_url,
        likes: 0
      }
  
      return fetch(this.baseUrl + "/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
        },
        body: JSON.stringify(body)
      })
      .then(this.parseJSON)
    }
  
    likeGame(id, newLikes){
      return fetch(this.baseUrl + `/games/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
        },
        body: JSON.stringify({likes: newLikes})
      })
      .then(function(res){
        if (res.status !== 200){
          throw new Error("NEIN")
        }
        return res.json()
      })
    }
  }