import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';
import './App.css';

const App = () => {

    const [searchField, setSearchField] = useState(''); //[value, setValue_function]
    const [monsters, setMonsters] = useState([]);//[value, setValue_function]
    const [filteredMonsters, setFilteredMonsters] = useState(monsters); 
    const [title, setTitle] = useState("");
    console.log('rendered');

    useEffect(()=> {
        console.log("Effect fired in here");
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users) => setMonsters(users));
    }, []); 

    useEffect(()=> {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
          });
        
        setFilteredMonsters(newFilteredMonsters); 

    }, [monsters, searchField]);


    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }

    const onTitleChange = (event) => {
        const newTitle = event.target.value.toLocaleLowerCase();
        setTitle(newTitle);
    }
    

    return (
        <div className="App">
          {/* <h1 className="app-title">Monsters Rolodex</h1> */}
          <h1 className="app-title">{title}</h1>
          <SearchBox
            className="monsters-search-box"
            placeholder="search-monster"
            onChangeHandler={onSearchChange}
          />

          <br /> 
          <SearchBox
            className="title-search-box"
            placeholder="set title"
            onChangeHandler={onTitleChange}
          />

          <CardList monsters = {filteredMonsters} />
        </div>
      );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters : [ ],
//       searchField : '',
//     }

//     // console.log("constructor");
//   }

//   componentDidMount() {
//     // console.log("componentDidMount");
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => this.setState( () => {
//         return {monsters: users}
//       },
//       // () => {console.log(this.state)}
//       ));
//   }

//   onSearchChange = (event) => {
//     console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {searchField};
//     });
// }

//   render() {
//     const {monsters, searchField} = this.state;
//     const { onSearchChange } = this;

//     // console.log("render");
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });


//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="monsters-search-box"
//           placeholder="search-monster"
//           onChangeHandler={onSearchChange}
//         />

//         <CardList monsters = {filteredMonsters} />
//       </div>
//     );
//   }
// }


export default App;
