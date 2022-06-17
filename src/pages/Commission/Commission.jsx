import React from 'react';
import './Commission.css';
import CommissionCard from '../../components/CommissionCard/CommissionCard';

const CommissionPage = () => {
    let ds = {
        type: 'digital sketch',
        description: '(Same for any character option)',
        cost: '$5.00'
    }

    return (
    <div className='commission-container'>
        <div className='commission-headline'>
            <span className='commission-header'>Commissions</span>
        </div>

        <div className="commission-card-container">
            <CommissionCard type={ds.type} description={ds.description} cost={ds.cost}/>
            <CommissionCard type={ds.type} description={ds.description} cost={ds.cost}/>
            <CommissionCard type={ds.type} description={ds.description} cost={ds.cost}/>
            <CommissionCard type={ds.type} description={ds.description} cost={ds.cost}/>
            <CommissionCard type={ds.type} description={ds.description} cost={ds.cost}/>
            <CommissionCard type={ds.type} description={ds.description} cost={ds.cost}/>
            <CommissionCard type={ds.type} description={ds.description} cost={ds.cost}/>
        </div>
    </div>
    )
}

export default CommissionPage;