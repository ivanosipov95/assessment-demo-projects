import {Book, Transport} from '../models';
import {EntityDao} from "../util/entity-dao";

export class BookDao extends EntityDao<Book> {
    constructor(protected transport: Transport<Book>) {
        super(transport);
        this.endpoint = 'api/books';
    }
}
