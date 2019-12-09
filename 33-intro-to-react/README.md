# Intro to React

## SWBATs
- [x] Recognize declarative and imperative coding paradigms
- [x] Visualize/identify Components on any website
- [x] Explain what a React Component actually is in code
- [x] Briefly explain Babel's purpose in React

- [x] Use JSX to build custom components and render them in the browser
- [x] See how props are to components as arguments are to functions

## Notes

### Declarative vs Imperative Programming

#### Imperative 

- Prepare ingredients
- Lay out tortilla
- Add some rice
- Add some beans
- Add hot sauce
- Add fixin's
- Add protein
- Fold burrito
- Cut it (if you want)
- Enjoy

```js
const container = document.querySelector("#container")
const div = document.createElement("div")

div.className = "container"
div.innerText = "Hello! I'm a burrito"

container.append(div)

const div2 = document.createElement("div")

div.className = "container"
div.innerText = "Sup fam!"

container.append(div2)
```

#### Declarative

- They heat up tortilla
- Tell them what rice you want
- Tell them what protein you want
- Tell them what beans you want
- Tell them what sauce you want
- Tell them what fixin's you want
- They fold burrito
- They hand it you
- You and enjoy

```js
function createDiv(text){
  const container = document.querySelector("#container")
  const div = document.createElement("div")

  div.className = "container"
  div.innerText = text

  container.append(div)
}

createDiv("Hello! I'm a burrito")
createDiv("Sup fam!")
```

### Absatractions to JSX

First form: *STATIC HTML*
```jsx
ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <h1>Hello, beef!</h1>
    <h1>Hello, squid!</h1>
  </div>,
  document.getElementById('root')
);
```


Second form: *Dynamic, reusable components using regular functions and arguments*
```jsx
function Greeting(phrase,name){
  return <h1>Hello {phrase}! - {name}</h1>
}

ReactDOM.render(
  <div>
    {Greeting("world", "Alex")}
    {Greeting("beef", "Peter")}
    {Greeting("squid", "Katarina")}
  </div>, 
  document.getElementById('root')
)
```

THIRD FORM: *Static components using JSX*
```jsx
function Greeting(){
  return <h1>Hello world!</h1>
}

ReactDOM.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
  </div>, 
  document.getElementById('root')
)
```

FINAL FORM: *Dynamic, reusable components using JSX and props*
```jsx
function Greeting(props){
  return <h1>Hello {props.phrase}! - {props.name}</h1>
}

ReactDOM.render(
  <div>
    <Greeting phrase="world" name="Alex"/>
    <Greeting phrase="beef" name="Peter"/>
    <Greeting phrase="squid" name="Katarina"/>
  </div>, 
  document.getElementById('root')
)
```

## Links

[Babel](https://babeljs.io/)
[React](https://reactjs.org/)
[Whiteboarding App](https://awwapp.com)
