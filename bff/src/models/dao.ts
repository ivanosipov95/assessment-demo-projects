export interface Dao<T> {
    getAll(): Promise<T>
    getById(id: string): Promise<T>
}
