import { Component } from 'react';

import './card-list.styles.css'; 

class CardList extends Component {
    
    render(){
        // console.log(this.props);    
        const {monsters} = this.props; 
        return (
            <div className='card-list'>
                { monsters.map(monster => {
                    const {id, name, email} = monster;  
                    return ( 
                        <div className='card-container' key='monster.id'>
                            <img alt= {`monster ${monster.name}`} 
                            className='img' 
                            src={`https://robohash.org/${monster.id}?set=set2size=180x180`} />
                            <h2>{monster.name}</h2>
                            <p>{monster.email}</p>
                        </div>
                    // <h1 key={monster.id}>{monster.name}</h1>
                    )
                })}
            </div>
        );
    }
}

export default CardList; 