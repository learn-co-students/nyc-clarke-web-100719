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
          props: {key: 3},
          children: ["Michael Buble"]
        },
        {
          tagName: "p",
          props: {key: 4},
          children: ["Prince"]
        },
        {
          tagName: "p",
          props: {key: 2},
          children: ["Tina Turner"]
        },
        {
          tagName: "p",
          props: {key: 1},
          children: ["What's the best food in the world?"]
        }
      ]
    }
  ]
}