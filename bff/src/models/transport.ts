import {QueryParams} from "./query-params";

export interface Transport<T> {
    getAll(endpoint: string, queryParams?: QueryParams): Promise<T>;
    getOne(endpoint: string, queryParams?: QueryParams): Promise<T>;
}
