const justOne = {
    title: "Just One",
    img: "https://cf.geekdo-images.com/itemrep/img/gOjxfHuppDqvdCPPX5M_oRdpA8o=/fit-in/246x300/pic4268499.jpg",
    catchphrase: "Be Unique! Repeats get CANCELLED."
}

// interpolation FTW
let justOneHTML = 
    `<div class="tile">
        <h4 id="container">${justOne.title}</h4>
        <p>${justOne.catchphrase}</p>
        <div class="image-wrapper">
            <img src=${justOne.img} alt="catan">
        </div>
    </div>`


let container = document.querySelector('#container')
container.innerHTML += justOneHTML