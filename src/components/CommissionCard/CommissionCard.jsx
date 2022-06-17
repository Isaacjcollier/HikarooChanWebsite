import React from 'react';
import './CommissionCard.css';
import cookingMamaRoo from '../../images/cookingmamaroo.png'

const CommissionCard = (props) => {
    return (
        <div className='commission-card'>
            <p className='commission-card-description-title'>{props.type}</p>
            <img className='commission-card-image' src={cookingMamaRoo} alt="placeholder-logo" />
             <p className='commission-card-description-text'>{props.description}
                <br/> 
                <span className='commission-card-cost'>{props.cost}</span>
            </p>
        </div>
    )
}

export default CommissionCard;