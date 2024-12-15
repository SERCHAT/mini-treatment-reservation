import React from 'react';
import { Treatment } from '../../../Types/Treatment';
import TreatmentListItem from './TreatmentListItem';
import './treatmentList.css'

function TreatmentList(props: { treatment_list: Array<Treatment> }) {
    return (
        <div className='treatment-list-container'>
            {
                props.treatment_list.map((item, index) => (
                    <TreatmentListItem key={item.id} treatment={item} />
                ))
            }
        </div>
    );
}

export default TreatmentList;