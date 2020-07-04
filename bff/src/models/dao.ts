import {Entity} from "./entity";

export interface Dao<T extends Entity> {
    getAll(text?: string): Promise<T[]>;

    getById(id: string): Promise<T>;

    updateName(id: string, name: string): Promise<T>;
}
