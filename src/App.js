import { Component } from 'react'; 

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      monsters : [ ],
      searchField : '', 
    }

    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState( () => {
        return {monsters: users}
      }, 
      () => {console.log(this.state)})); 
  } 

  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase(); 
    this.setState(() => {
      return {searchField}; 
    }); 
}

  render() {
    const {monsters, searchField} = this.state;
    const { onSearchChange } = this; 

    console.log("render");
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField); 
    }); 


    return (
      <div className="App">
        <input 
          className="search-box" 
          type="search" 
          placeholder="search monsters" 
          onChange={onSearchChange}/>

        {filteredMonsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>; 
          })
        } 
      </div>
    ); 
  }
} 


export default App;
