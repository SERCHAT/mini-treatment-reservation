import { BaseAPI } from "../Core/BaseAPI";
import { Treatment } from "../Types/Treatment";
import { TreatmentsEndpoints } from "../constants/TreatmentsEndpoints";


export default class TreatmentService extends BaseAPI{

    getTreatments = async ():Promise<Array<Treatment>>=>{
        const treatments = await this.get(TreatmentsEndpoints.GetAll()) as Array<Treatment>
        return treatments
    }   
    
    
    getTreatmentDetails = async (treatment_id:string):Promise<Treatment>=>{
        const treatment = await this.get(TreatmentsEndpoints.Detail(treatment_id)) as Treatment
        return treatment
    }


    createTreatment = async ():Promise<void>=>{

    }

    

    
    
}