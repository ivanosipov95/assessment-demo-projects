import {Book, Dao, Transport} from '../models';

export class BookDao implements Dao<Book> {

    constructor(private transport: Transport<Book>) {
    }

    getAll(queryParams: object = {}): Promise<Book> {
        return this.transport.getAll('api/books', queryParams);
    }
}
