import React from 'react';
import './App.css';
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import MainBody from './MainBody'

class App extends React.Component {

  state = {
    onlyForSale: false,
    searchTerm: ""
  }

  changeSearchTerm = (newTerm) => {
    this.setState({
      searchTerm: newTerm
    })
  }

  toggleFilter = () => {
    this.setState({
      onlyForSale: !this.state.onlyForSale
    })
  }

  render(){
    console.log(this.state)
    return (
      <div>
        <NavBar />
        <SearchBar changeSearchTerm={this.changeSearchTerm} toggleFilter={this.toggleFilter} />
        <MainBody searchTerm={this.state.searchTerm} onlyForSale={this.state.onlyForSale} />
      </div>
    );
  }
}


// function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn BEEF
//         </a>
//       </header>
//     </div>
//   );
// }



// function sup(){
//   console.log("sup")
// }

// function fam(){
//   console.log("fam")
// }

// export { sup, fam }

export default App;
