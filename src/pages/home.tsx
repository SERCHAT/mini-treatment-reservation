import React, { useCallback, useEffect, useState } from 'react';
import TreatmentList from '../components/Home/TreatmentList/TreatmentList';
import TreatmentService from '../services/TreatmentService';
import { Treatment } from '../Types/Treatment';

function home() {

    const [treatments, setTreatments] = useState(new Array<Treatment>);
    const loadData = useCallback(async () => {
        const treatmentService = new TreatmentService()
        const treatments = await treatmentService.getTreatments()
        setTreatments(treatments)
    }, [])

    useEffect(() => {
        loadData()
    }, [])


    return (

        <TreatmentList treatment_list={treatments} />

    )
}
export default home;