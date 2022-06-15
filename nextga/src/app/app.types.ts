
export interface IUnknowObject {
    [key: string | number | symbol ]: any,
}

export interface ICarEndpointResponse {
    total: number,
    data: ICar[],
    status: string,
}

export interface ICar {
    objectId: string,
    year: number,
    make: string,
    model: string,
    category: string,
    createdAt: string,
    updatedAt: string
}

export interface ISate {
    cars: ICar[],
}

export enum RestMethods {
    Delete = 'DELETE',
    Get = 'GET',
    Options = 'OPTIONS',
    Patch = 'PATCH',
    Post = 'POST',
    Put = 'PUT',
}

export interface IRestRequest {
    url: string,
    method: RestMethods,
    payload?: object,
    query?: string,
}