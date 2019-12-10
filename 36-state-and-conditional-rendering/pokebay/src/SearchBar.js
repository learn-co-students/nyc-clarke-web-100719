import React from 'react'

class SearchBar extends React.Component {
  render(){
    return (
      <div>
        <input placeholder="Search PokeBay..." />
        <select>
          <option value="1">Gen I</option>
          <option value="2">Gen II</option>
          <option value="3">Gen II</option>
        </select>
        <button>Search!</button>
        <button onClick={this.props.toggleFilter} >Display only for sale pokemon</button>
      </div>
    )
  }
}

export default SearchBar