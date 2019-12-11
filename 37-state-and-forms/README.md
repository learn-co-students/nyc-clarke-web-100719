State and Forms
==============

## SWBATs
- [x] Explore state more in depth
- [x] Identify where (in which component) state should live
- [x] Explain how we use controlled forms
- [x] Implement controlled form
- [x] Draw a component hierarchy and describe the Flow of Information
- [x] Pass data up and down the component hierarchy with our callbacks
- [x] Use form data to update state in various ways

## Lecture Notes


### Vanilla JS Forms
- added submit event handler to form
- on submit grab the values from all relevant inputs
- use data for whatever

### React Controlled Forms



In React, rather than finding individual input elements using `querySelector` or `getElementBy...`, we use `state` to monitor the user's input as they type.

The all-purpose `handleChange`. Just remember to add `name` attributes to your inputs!
```js
handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
```

Doing this creates a 1-way connection wherein user input changes `state`. This is called an *uncontrolled form*. To make it a 2-way street wherein `state` can change the user's input, we add a `value` attribute to our inputs.

```jsx
<input 
  value={this.state.beef} 
  name="beef" 
  onChange={this.handleChange}
/>
```

#### Trick for updating arrays!

```js
    const updatedCustomers = this.state.customers.map(customer => {
      if (customer.id === foundCustomer.id){
        return foundCustomer
      } else {
        return customer
      }
    })
```
### Lifting State

[Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
- Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.
- If two sibling components need access to the same `state`, you will want to place the shared `state` in a parent container. Then you can pass down that `state` as well as any functions that need to modify the state as props to the two sibling components that need to display and/or change that data.

## Extras

- [Reconciliation](https://reactjs.org/docs/reconciliation.html)