import {Dao, Transport} from "../models";
import {Entity} from "../models/entity";

export abstract class EntityDao<T extends Entity> implements Dao<T> {
    protected endpoint = '';

    constructor(protected transport: Transport<T>) {
    }

    getAll(): Promise<T[]> {
        return this.transport.getAll(this.endpoint);
    }

    getById(id: string): Promise<T> {
        return this.transport.getOne(`${this.endpoint}/${id}`);
    }

}
