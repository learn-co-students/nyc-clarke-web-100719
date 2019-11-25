// if you're not a fan of defer in the HTML for whatever reason... 🤔
// read the article, it's not so scary!
// document.addEventListener('DOMContentLoaded', function() {
    
    const dogBar = document.querySelector('#dog-bar')
    const dogInfo = document.querySelector('#dog-info')
    const dogFilterBtn = document.querySelector('#good-dog-filter')
    const onOff = dogFilterBtn.querySelector('span')
    let dogs = []



    // STEP TWO
    fetch('http://localhost:3000/pups')
        .then(function(res){ return res.json() })
        .then(function(data){
            dogs = data
            data.forEach(function(dog) {
                dogBar.insertAdjacentHTML('beforeend', `<span data-id=${dog.id}>${dog.name}</span>`)
            })
        })

    // STEP THREE
    dogBar.addEventListener('click', function(event){
        if(event.target.dataset.id) { // only if we're clicking on one of the spans
            let targetDog = dogs.find(function(dog) { return dog.id == event.target.dataset.id })
            let goodDogText = "Good Dog!"
            if (!targetDog.isGoodDog) goodDogText = 'Bad Dog!'
    
            let dogHTML = `
                <img src=${targetDog.image}>
                <h2>${targetDog.name}</h2>
                <button data-id=${targetDog.id} class="toggle-btn">${goodDogText}</button>
            `
            dogInfo.innerHTML = dogHTML
        }
    })

    // STEP THREE V2
    // sends a fetch request for a specific dog 
    // dogBar.addEventListener('click', function(event){ 
    //     if(event.target.dataset.id) getSingleDog(event.target.dataset.id) 
    // })

    // function getSingleDog(id) {
    //     fetch(`http://localhost:3000/pups/${id}`)
    //     .then(function(res){ return res.json() })
    //     .then(function(dog){
    //         let goodDogText = "Good Dog!"
    //         if (!dog.isGoodDog) goodDogText = 'Bad Dog!'

    //         let dogHTML = `
    //             <img src=${dog.image}>
    //             <h2>${dog.name}</h2>
    //             <button>${goodDogText}</button>
    //         `
    //         dogInfo.innerHTML = dogHTML
    //     })
    // }

    // STEP FOUR

    dogInfo.addEventListener('click', function(event){
        if(event.target.className === 'toggle-btn'){
            // switch its text to the opposite 
            let newGoodValue;
            if(event.target.innerText === 'Good Dog!'){
                event.target.innerText = 'Bad Dog!'
                newGoodValue = false;
            } else {
                event.target.innerText = 'Good Dog!'
                newGoodValue = true;
            }

            // send patch request
            fetch(`http://localhost:3000/pups/${event.target.dataset.id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    isGoodDog: newGoodValue
                })
            })

        }
    })


    // STEP FIVE
    dogFilterBtn.addEventListener('click', function(event){
        // find the span and update its text to the opposite 
        dogBar.innerText = ""
        dogInfo.innerHTML = ""
        // also clear the individual dog view???

        if(onOff.innerText === 'OFF'){
            onOff.innerText = 'ON'
            // we should only show the dogs who isGoodDog is true
            dogs
                .filter(function(dog){ return dog.isGoodDog })
                .forEach(function(dog) {
                    dogBar.insertAdjacentHTML('beforeend', `<span data-id=${dog.id}>${dog.name}</span>`)
                })
        } else {
            onOff.innerText = 'OFF'
            // show errybody 
            dogs.forEach(function(dog) {
                dogBar.insertAdjacentHTML('beforeend', `<span data-id=${dog.id}>${dog.name}</span>`)
            })
        }
    })


// })