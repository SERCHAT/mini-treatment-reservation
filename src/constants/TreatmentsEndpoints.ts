export const TreatmentsEndpoints = {

    GetAll :()=>`treatments/all`,
    Detail :(treatment_id:string)=>`treatments/details/${treatment_id}`,
    Create :()=>`treatments/create`

}