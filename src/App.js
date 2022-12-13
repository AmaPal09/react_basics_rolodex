import { Component } from 'react'; 

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      name: 'Gaurav'
    }
  }

  render() {
    return (
      <div className="App"> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
          <p> 
            Hey {this.state.name}!
          </p>
          <button onClick={() => {
            let obj1 = {pet: "dog"}; 
            let obj2 = obj1; 
            console.log(obj1 === obj2); 
            obj1.pet = "cat"; 
            console.log(obj1 === obj2); 
            let obj3 = Object.assign({}, obj1); 
            console.log(obj1 === obj3); 
            console.log("obj1: ", obj1); 
            console.log("obj2: ", obj2); 
            console.log("obj3: ", obj3); 

            this.setState({name: "Amarja"}); 
            } }>
            Change name
          </button>
        </header>
      </div>
    ); 
  }
} 
/* 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello my name is Amarja! And this is my react app
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
*/

export default App;
