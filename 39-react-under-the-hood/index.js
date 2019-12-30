const virtualDOM = {
  tagName: "div",
  props: {id: "beef"},
  children: [
    "Hello steak!",
    {
      tagName: "h1",
      props: {},
      children: ["Wat"]
    },
    {
      tagName: "div",
      props: {className: "container"},
      children: [
        {
          tagName: "p",
          props: {key: 1},
          children: ["What's the best food in the world?"]
        },
        {
          tagName: "p",
          props: {key: 2},
          children: ["Tina Turner"]
        },
        {
          tagName: "p",
          props: {key: 3},
          children: ["Michael Buble"]
        },
        {
          tagName: "p",
          props: {key: 4},
          children: ["Prince"]
        }
      ]
    }
  ]
}

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

render(virtualDOM, document.getElementById("root"))





