const fetch = require('node-fetch');

export class RequestBuilder<T> {
    private _url: string;

    constructor(private baseUrl: string) {}

    endpoint(endpoint: string): RequestBuilder<T> {
        this._url = `${this.baseUrl}/${endpoint}`;

        return this;
    }

    queryParams(): RequestBuilder<T> {
        return this;
    }

    get(): Promise<T> {
        console.log(`sending GET request to: ${this._url}`);

        return fetch(this._url)
            .then((res: any) => res.json() as T)
    }
}
