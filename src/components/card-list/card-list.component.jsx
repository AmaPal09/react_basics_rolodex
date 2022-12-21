import { Component } from 'react';

import './card-list.styles.css'; 
import CardContainer from '../card-container/card-container.component';

class CardList extends Component {
    
    render(){
        // console.log(this.props);    
        const {monsters} = this.props; 
        return (
            <div className='card-list'>
                { monsters.map(monster => {
                    // console.log(monster); 
                    return <CardContainer monster = { monster }/> 
                })}
            </div>
        );
    }
}

export default CardList; 