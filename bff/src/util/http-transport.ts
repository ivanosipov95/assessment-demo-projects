import {Transport} from '../models/transport';
import {RequestBuilder} from "./request-builder";

export class HttpTransport<T> implements Transport<T> {

    constructor(private baseUrl: string) {
    }

    getAll(endpoint: string, queryParams?: object): Promise<T> {
        return new RequestBuilder<T>(this.baseUrl)
            .endpoint(endpoint)
            .get()
    }
}
