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
                        <div className='card-container' key='id'>
                            <img alt= {`monster ${name}`} 
                            className='img' 
                            src={`https://robohash.org/${id}?set=set2size=180x180`} />
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                    // <h1 key={monster.id}>{monster.name}</h1>
                    )
                })}
            </div>
        );
    }
}

export default CardList; 