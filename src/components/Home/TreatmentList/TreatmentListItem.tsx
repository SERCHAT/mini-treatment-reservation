import React, { useCallback, useState } from 'react';
import { Treatment } from '../../../Types/Treatment';
import '../TreatmentList/treatmentList.css'


function TreatmentListItem(props: { treatment: Treatment }) {


    const bookNowClicked = useCallback(async (treatment: Treatment) => {
        //show date picker

    }, [])

    return (
        <div className='treatment-list-item'>


            <div className='tratment-item-img'>
                <img className='treatment-img' src={props.treatment.imageUrl} />
            </div>
            <div className='treatment-text-container'>
                <h2 className='treatment-title'>{props.treatment.title}</h2>
                <p className='treatment-description'>{props.treatment.description}</p>
            </div>
            <button onClick={() => bookNowClicked(props.treatment)} className='book-now-button'>Book Now</button>



        </div >
    );
}

export default TreatmentListItem;