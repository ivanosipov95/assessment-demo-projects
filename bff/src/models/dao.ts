import {Entity} from "./entity";

export interface Dao<T extends Entity> {
    getAll(): Promise<T[]>
    getById(id: string): Promise<T>
}
