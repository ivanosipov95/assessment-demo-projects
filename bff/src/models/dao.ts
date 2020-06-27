export interface Dao<T> {
    getAll(): Promise<T>
}
