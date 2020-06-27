import {Transport, QueryParams} from '../models';
import {RequestBuilder} from "./request-builder";

export class HttpTransport<T> implements Transport<T> {

    constructor(private baseUrl: string) {
    }

    getAll(endpoint: string, queryParams: QueryParams = {}): Promise<T> {
        return new RequestBuilder<T>(this.baseUrl)
            .endpoint(endpoint)
            .queryParams(queryParams)
            .get()
    }

    getOne(endpoint: string, queryParams: QueryParams = {}): Promise<T> {
        return new RequestBuilder<T>(this.baseUrl)
            .endpoint(endpoint)
            .queryParams(queryParams)
            .get();
    }
}
