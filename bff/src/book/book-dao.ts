import {Book, Dao, Transport} from '../models';

export class BookDao implements Dao<Book> {
    private endpoint = 'api/books';

    constructor(private transport: Transport<Book>) {
    }

    getAll(): Promise<Book[]> {
        return this.transport.getAll(this.endpoint);
    }

    getById(id: string): Promise<Book> {
        return this.transport.getOne(`${this.endpoint}/${id}`);
    }
}
