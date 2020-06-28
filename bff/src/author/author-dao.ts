import {Transport} from '../models';
import {Author} from "../models/author";
import {EntityDao} from "../util/entity-dao";

export class AuthorDao extends EntityDao<Author> {
    constructor(protected transport: Transport<Author>) {
        super(transport);
        this.endpoint = 'api/authors';
    }
}
