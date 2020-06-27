import {Entity} from './entity';
import {Book} from './book';

export interface Shop extends Entity {
    books: Book[];
}
