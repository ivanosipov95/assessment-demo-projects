import {QueryParams} from "./query-params";

export interface Transport<T> {
    getAll(endpoint: string, queryParams?: QueryParams | null): Promise<T[]>;

    getOne(endpoint: string, queryParams?: QueryParams| null): Promise<T>;

    update(endpoint: string, body: any): Promise<T>;
}
