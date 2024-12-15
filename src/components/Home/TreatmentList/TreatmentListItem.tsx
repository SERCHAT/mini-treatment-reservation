import React from 'react';
import { Treatment } from '../../../Types/Treatment';
import '../TreatmentList/treatmentList.css'

function TreatmentListItem(props: { treatment: Treatment }) {
    return (
        <div className='treatment-list-item'>

            <div className='tratment-item-img'>
                <img className='treatment-img' src={props.treatment.imageUrl} />
            </div>
            <h2 className='treatment-title'>{props.treatment.title}</h2>
            <p className='treatment-description'>{props.treatment.description}</p>
            <button className='book-now-button'>Book Now</button>
        </div>
    );
}

export default TreatmentListItem;