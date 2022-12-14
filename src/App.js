import { Component } from 'react'; 

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      monsters : [
        {name: "M1"}, 
        {name: "M2"}, 
        {name: "M3"}, 
        {name: "M4"}, 
      ],
    }
  }

  render() {
    return (
      <div className="App"> 
        {this.state.monsters.map((monster) => {
            return <h1>{monster.name}</h1>; 
          })
        } 
      </div>
    ); 
  }
} 


export default App;
