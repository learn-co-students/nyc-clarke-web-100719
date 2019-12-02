this.name = 'window object'

/************ Simple Function Call ***********************/
function theFerry() {
  console.log(this.name)
}

let button = document.getElementById('button')

document.addEventListener("click", function(e){
  console.log(this)
  console.log(e.target)
})
/********************************************************/


/************ Function called on an Object ***************/
// functions declared with the function keyword

let person = {
  name: "Soufiane", 
  favoriteSport: "soccer", 
  favoriteFoods: ["tacos", "sushi", "couscous","tajin"],
  greet: function(){
    console.log(this.name)
    console.log(this)
  }
}

person2 = {
  name: "Jimmy",
  favoriteFoods: ["Ramen", "Fried Rice", "Burritos"]
}

function getFoods(array){
  console.log(`IN THE CONTEXT OF PERSON forEach ${this.name} `, array)
}
/********************************************************/


/************ Bind Call Apply ****************************/


/********************************************************/


/************ Arrow Functions ****************************/

let cat = {
  name: "Amigo",
  favoriteActivity: "napping",
  favoriteFoods: ["tacos", "sushi", "couscous", "tajin"],
  greet: function() {
    console.log(this.name)
    console.log(this)
    this.favoriteFoods.forEach((food)=>{
      console.log(`THIS IN THE CONTEXT OF forEach ${this.name}`, food)
    })
  }
}
/********************************************************/

/************ Function Called with New Keyword ***********/

function construtor (size, speed){

  this.size = size
  this.speed = speed
  return this
}



let boat1 = new Boat(10, 100)



/********************************************************/