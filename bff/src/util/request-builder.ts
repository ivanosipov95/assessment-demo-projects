import {QueryParams} from '../models';

const fetch = require('node-fetch');
const querystring = require('querystring');

export class RequestBuilder<T> {
    private _url: string;
    private _queryParams: QueryParams | null;
    private _body: any;

    constructor(private baseUrl: string) {}

    endpoint(endpoint: string): RequestBuilder<T> {
        this._url = `${this.baseUrl}/${endpoint}`;

        return this;
    }

    queryParams(queryParams: QueryParams): RequestBuilder<T> {
        this._queryParams = queryParams && Object.keys(queryParams).length !== 0 ? queryParams : null;

        return this;
    }

    body(body: any): RequestBuilder<T> {
        this._body = body;

        return this;
    }

    get(): Promise<T> {
        const url = this._queryParams ? `${this._url}?${querystring.stringify(this._queryParams)}` : this._url;

        console.log(`sending GET request to: ${url}`);

        return fetch(url)
            .then((res: any) => res.json() as T)
    }

    put(): Promise<T> {
        const url = this._queryParams ? `${this._url}?${querystring.stringify(this._queryParams)}` : this._url;

        console.log(`sending PUT request to: ${url}`);

        return fetch(url, {method: 'PUT', body: JSON.stringify(this._body), headers: { 'Content-Type': 'application/json' }})
            .then((res: any) => res.json() as T)
    }
}
