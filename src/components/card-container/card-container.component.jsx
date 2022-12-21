import { Component } from 'react'; 

import './card-container.styles.css';

class CardContainer extends Component {
    render() {
        const {monster} = this.props; 
        const { id, name, email} = monster; 
        // console.log(monster);
        return (
            <div className='card-container' key ='id'>
                <img alt= {`monster ${name}`} 
                    className='img' 
                    src={`https://robohash.org/${id}?set=set2size=180x180`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        ); 
    }
}

export default CardContainer; 