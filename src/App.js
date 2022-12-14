import { Component } from 'react'; 

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      monsters : [
        {
          name: "M1", 
          id: 1,
        }, 
        {
          name: "M2", 
          id: 2, 
        }, 
        {
          name: "X3", 
          id: 3, 
        }, 
        {
          name: "M4",
          id: 4, 
        }, 
      ],
    }
  }

  render() {
    return (
      <div className="App"> 
        {this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>; 
          })
        } 
      </div>
    ); 
  }
} 


export default App;
