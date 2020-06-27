import {ReferenceData} from './reference-data';
import {Entity} from './entity';
import {Author} from './author';

export interface Book extends Entity {
    author: Author;
    cost: number;
    currency: ReferenceData;
}

