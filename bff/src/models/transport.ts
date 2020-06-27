export interface Transport<T> {
    getAll(endpoint: string, queryParams?: object): Promise<T>
}
