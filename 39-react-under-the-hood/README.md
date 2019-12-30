# React: Under the Hood

## SWBATs
- [ ] Explain ReactDOM and the idea of a virtual DOM
- [ ] Explain why React needs the `key` prop on individual components when rendered in an array

## Notes

### Three magical HTML ingredients
```html
<div id="beef" class="header">
  Hello beef!
  <h1>Wat</h1>
  <div class="container">
    <p>What's the best food in the world?</p>
  </div>
</div>
```

1. Tag name - string (e.g. "div", "p")
2. Attributes - object (e.g. {id: "beef", className: "header"})
3. Content (text and/or another element) - array 

```js
const virtualDOM = {
  tagName: "div"
  attributes: {id: "beef", className: "header"}
  children: [
    "Hello steak!",
    {
      tagName: "h1"
      attributes: {}
      children: ["Wat"]
    },
    {
      tagName: "div",
      attributes: {className: "container"},
      children: [
        {
          tagName: "p",
          attributes: {},
          children: ["What's the best food in the world?"]
        }
      ]
    }
  ]
}
```

### Let's write `createElement`

```js
function reactCreateElement(htmlObj){
  // use the tag name to construct the html element
  const element = document.createElement(htmlObj.tagName)

  // assign attributes from hmltObj to element
  // element.className = htmlObj.attributes.className
  for(let attr in htmlObj.attributes){
    element[attr] = htmlObj.attributes[attr]
  }

  // assign children to this element
  htmlObj.children.forEach(child => {
    if (typeof child === "string"){
      element.append(child)
    } else {
      element.append(reactCreateElement(child))
    }
  })

  return element
  //recursive
}

function render(htmlObj, destination){
  destination.append(reactCreateElement(htmlObj))
}
```

 Represent the above HTML as a JS object

### `key` prop error
Only comes up when iterating over an array to create components
```jsx
  render(){
  
    return (
      <div>
        {
          array.map(el => {
            return <MyComponent el={el}/>
          })
        }
      </div>
    )
  }
```
For optimization purposes, DOM elements are only rerendered when elements change. React keeps a copy of the old DOM and compares it with the incoming DOM. Anything that remains the same is NOT rerendered, while anything that has changed will be rerendered.

Lists are tricky, especially when they are reordered (e.g. sorted). When doing the comparison, React will see reordered elements as new/different elements and rerender entirely new components. This is inefficient. This is why React yells at you about adding a `key` prop to components rendered in a list. `key` props in React are used to optimize the rerendering phase - React will look for elements in the old DOM and the new that having matching keys and compare them before deciding to rerender that component or simply reorder it in the parent.


## Links
[Dan Abramov: React as a UI Runtime](https://overreacted.io/react-as-a-ui-runtime/)
[Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
[Why you need the key prop to be unique](https://medium.com/@vraa/why-using-an-index-as-key-in-react-is-probably-a-bad-idea-7543de68b17c)