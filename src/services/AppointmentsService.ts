import { AppointmentsEndpoints } from "../constants/AppointmentsEndpoints";
import { BaseAPI } from "../Core/BaseAPI";

export default class AppointmentsService extends BaseAPI{

    public checkAvailability = async (date:string,treatment_id:string):Promise<any> => {

        const result = await this.get(AppointmentsEndpoints.check(date,treatment_id))
        return result;

    }

}