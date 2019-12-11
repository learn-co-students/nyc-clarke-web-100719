import React from 'react'

class SearchBar extends React.Component {

  // state = {
  //   searchInput: ""
  // }

  handleChange = (e) => {
    this.props.changeSearchTerm(e.target.value)
    
    // this.setState({
    //   [e.target.name]: e.target.value
    // })
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()

  //   // do filtery thingies

  //   // clear the input value
  //   this.setState({
  //     searchInput: ""
  //   })
  // }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="searchInput" value={this.state.searchInput} onChange={this.handleChange} placeholder="Search PokeBay..." />
          <select>
            <option value="1">Gen I</option>
            <option value="2">Gen II</option>
            <option value="3">Gen II</option>
          </select>
          <input type="submit" value="Search!"/>
        </form>
        <button onClick={this.props.toggleFilter} >Display only for sale pokemon</button>
      </div>
    )
  }
}

export default SearchBar