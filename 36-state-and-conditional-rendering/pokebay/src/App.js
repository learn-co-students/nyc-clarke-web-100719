import React from 'react';
import './App.css';
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import MainBody from './MainBody'

class App extends React.Component {

  state = {
    onlyForSale: false
  }

  toggleFilter = () => {
    this.setState({
      onlyForSale: !this.state.onlyForSale
    })
  }

  render(){
    return (
      <div>
        <NavBar />
        <SearchBar toggleFilter={this.toggleFilter} />
        <MainBody onlyForSale={this.state.onlyForSale} />
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
