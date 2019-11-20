/**               VARIABLES AND HELPERS          */
const plus = document.getElementById('+')
const minus = document.getElementById('-')
const heart = document.getElementById('<3')
const counter = document.querySelector('#counter')
const pause = document.querySelector('#pause')
const controls = document.querySelector('#controls')
const commentForm = document.getElementById('comment-form')
const commentList = document.getElementById('list')
const likesList = document.querySelector('#likes')
let intervalNumber
let likes = {}

/*
{counterNum: numLikes}
{
5: 1,
6: 20,
47: 2,
16: 4 
}
 */


function updateCounter(value){
    counter.innerText = parseInt(counter.innerText) + value
}

// TODO HELPER METHOD FOR TOGGLING BUTTONS 


/**              CLICK HANDLERS             */

// TODO: USE EVENT DELEGATION
// plus.addEventListener('click', function(event){
// })

// minus.addEventListener('click', function(event){
// })

// pause.addEventListener('click', function(event){
    
// })

commentForm.addEventListener('submit', function(event){
    event.preventDefault()

    const commentText = commentForm.querySelector('input').value

    let newComment = document.createElement('p')
    newComment.innerText = commentText
    commentList.appendChild(newComment)

    // commentList.innerHTML += `<p>${commentText}</p>`

    commentForm.reset()
})

controls.addEventListener('click', function(event){
    // console.log(event.target)
    if (event.target === plus){
        updateCounter(1)
    } else if (event.target === minus){
        updateCounter(-1)
    } else if (event.target === pause){
        const allButtons = document.querySelectorAll('button')
        allButtons.forEach(function(button) {
            if(button !== pause){
                button.disabled = !button.disabled
            }
        })
        if(pause.innerText === 'pause'){
            clearInterval(intervalNumber)
            pause.innerText = 'resume'
        } else {
            // reset the interval
            // set the innertext back to pause 
            pause.innerText = 'pause'
            intervalNumber = setInterval(function(){ updateCounter(1) }, 1000)
        }
    } else if(event.target === heart ){
            
        if (likes[counter.innerText]){
            likes[counter.innerText] += 1
            let currentSpan = document.querySelector(`span[data-num='${counter.innerText}']`)

            currentSpan.innerText = (parseInt(currentSpan.innerText) + 1) + ` times`+ "!".repeat(likes[counter.innerText])

        } else {
            likes[counter.innerText] = 1
            likesList.innerHTML += `<li>${counter.innerText} has been liked <span data-num=${counter.innerText}>${likes[counter.innerText]} time</span>! </li>`
        }

        // Other methods! Add an id to the li and find it that way, then update the string 

    }
})




// Creates the first interval
intervalNumber = setInterval(function(){ updateCounter(1) }, 1000)

// clearInterval(intervalNumber)