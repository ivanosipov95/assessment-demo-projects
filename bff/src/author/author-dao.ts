import {Dao, Transport} from '../models';
import {Author} from "../models/author";

export class AuthorDao implements Dao<Author> {
    private endpoint = 'api/authors';

    constructor(private transport: Transport<Author>) {
    }

    getAll(): Promise<Author[]> {
        return this.transport.getAll(this.endpoint);
    }

    getById(id: string): Promise<Author> {
        return this.transport.getOne(`${this.endpoint}/${id}`);
    }
}
