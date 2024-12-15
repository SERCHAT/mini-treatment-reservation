export abstract class BaseAPI {

private baseUrl = "http://localhost:5221"
private concatEndpointToBaseUrl = async (endpoint:string):Promise<string>=>{
    return this.baseUrl.concat("/").concat(endpoint);
}

public post = async(endPoint:string,body:any):Promise<any> => {
    
    const response = await fetch(await this.concatEndpointToBaseUrl(endPoint), {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const data = await response.json()
    return data;
}


public get = async (endPoint:string):Promise<any>=> {
    
    const response = await fetch(await this.concatEndpointToBaseUrl(endPoint), {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      })

    const data = await response.json()
    return data;

}




}