import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import MainBody from './MainBody'

class App extends React.Component {

  render(){
    return (
      <div>
        <NavBar />
        <SearchBar />
        <MainBody />
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
