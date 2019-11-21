const URL_PREFIX = 'http://localhost:3001/';
let page = 1;


/********************************* FETCH MONSTER FUNCTIONS ******************************/
function getMonsters(pageNum) {
    fetch(URL_PREFIX+`monsters/?_limit=50&_page=${pageNum}`)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#monster-container').innerHTML='';
            for(let monsterIdx=0; monsterIdx < data.length; monsterIdx++) {
                // console.log('monster',data[monsterIdx])
                createMonsterCard(data[monsterIdx])
            }
        }) 
}

/********************************* DISPLAYING FUNCTIONS ******************************/
function createMonsterCard(monster){
    // let container = document.createElement('div'),
    //     name = document.createElement('h2'),
    //     age = document.createElement('h3'),
    //     description = document.createElement('p');

    let monsterHTML = `<div>
        <h2>${monster.name}</h2>
        <h3>${monster.age}</h3>
        <p>Bio: ${monster.description}</p>
    </div>`

    // container
    // name.innerHTML = `${monster.name}`;
    // age.innerHTML = `Age: ${monster.age}`;
    // description.innerHTML = `Bio: ${monster.description}`;
    // container.appendChild(name);
    // container.appendChild(age);
    // container.appendChild(description);

    document.querySelector('#monster-container').insertAdjacentHTML('beforeend', monsterHTML)
    // document.querySelector('#monster-container').appendChild(container)
}

/********************************* NEW MONSTER RELATED FUNCTIONS ******************************/
const createMonsterForm = function(){
    const form = document.createElement('form'),
        nameInput = document.createElement('input'),
        ageInput = document.createElement('input'),
        descriptionInput = document.createElement('input'),
        submit = document.createElement('button'); 


    form.setAttribute('id','monster-form');
    nameInput.setAttribute('id','name')
    nameInput.setAttribute('placeholder', 'name...');
    ageInput.setAttribute('id','age')
    ageInput.setAttribute('placeholder', 'age...');
    descriptionInput.setAttribute('id','description')
    descriptionInput.setAttribute('placeholder', 'description...');
    submit.setAttribute('id', 'submit')
    submit.innerHTML = 'Create';

    // form.appendChild(nameInput)
    // form.appendChild(ageInput)
    // form.appendChild(descriptionInput)
    // form.appendChild(submit); 

    [nameInput, ageInput, descriptionInput, submit].forEach(function(node) { form.appendChild(node) })

    document.getElementById('create-monster').appendChild(form);
    addSubmitEventListener()
}

const addSubmitEventListener = function(){
    document.querySelector('#monster-form').addEventListener('submit', function(event){ 
        event.preventDefault();
        console.log('submitted',getFormData());
        if(getFormData().name.length <= 3){
            alert('A name must be longer than 3 characters')
        } else {
            postNewMonster(getFormData());
        }
        clearForm()
    })
}

const getFormData = function(){
    let name = document.querySelector('#name'),
        age = document.querySelector('#age'),
        description = document.querySelector('#description');

        return {
            name: name.value,
            age: parseFloat(age.value), 
            description: description.value
        }
}

function postNewMonster(monsterObj){
    let url = URL_PREFIX + `monsters`, // PROBLEM 3 ANSWER: there were too many '/'s
        requestOptions = {
            method: 'POST',
            headers:{
                'Content-type':'application/json',
                Accept:'application/json'
            },
            body:JSON.stringify(monsterObj)};

    fetch(url, requestOptions)
        .then(function(response){  return response.json()})
        .then(function(data){ console.log('new monster', data) }) 
        .catch(function(error) { 
            // debugger;
            alert(`womp womp do better:  ${error.message}`) 
        })
}

const clearForm = function(){ document.querySelector('#monster-form').reset() }


/********************************* PAGE NAVIGATION FUNCTIONS ******************************/
const addNavListeners = function(){
    let backButton=document.querySelector('#back'),
        forwardButton=document.querySelector('#forward');

    
    // Problem 2 V2: backButton.disabled = true;
    // in page down if setting page to 1, disable backButton again. 
    // in page up enable backButton 

    backButton.addEventListener('click',()=>{pageDown()});
    forwardButton.addEventListener('click',()=>{pageUp()});
}
const setPageNum = (page) => {
    const pageNumElement = document.getElementById('page-num')
    pageNumElement.innerHTML = page
}
const pageUp = function(){ page++; getMonsters(page); setPageNum(page) }

const pageDown = function(){
    if(page > 1){
        page--; 
        getMonsters(page);
        setPageNum(page)
    }
}

const init = function(){
    console.log('innit, mate')
    setPageNum(page);
    getMonsters(page);
    createMonsterForm();
    addNavListeners();
    };


/********************************* DOMCONTENTLOADED LISTENER ******************************/
document.addEventListener('DOMContentLoaded', init); 
// init()