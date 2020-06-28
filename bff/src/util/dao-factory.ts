import {DaoType} from "./dao-type";
import {AuthorDao} from "../author/author-dao";
import {HttpTransport} from "./http-transport";
import {Author} from "../models/author";
import {envConfig} from "../config/env-config";
import {Book, Dao} from "../models";
import {BookDao} from "../book/book-dao";
import {Entity} from "../models/entity";
import {ReferenceData} from "../models/reference-data";
import {ReferenceDataDao} from "../reference-data/reference-data-dao";
import {ShopDao} from "../shop/shop-dao";
import {Shop} from "../models/shop";

export class DaoFactory {
    static getInstance(type: DaoType): Dao<Entity> {
        switch (type) {
            case DaoType.AUTHOR:
                return new AuthorDao(new HttpTransport<Author>(envConfig.authorServiceUrl));
            case DaoType.BOOK:
                return new BookDao(new HttpTransport<Book>(envConfig.bookServiceUrl));
            case DaoType.REFERENCE_DATA:
                return new ReferenceDataDao(new HttpTransport<ReferenceData>(envConfig.referenceDataServiceUrl));
            case DaoType.SHOP:
                return new ShopDao(new HttpTransport<Shop>(envConfig.shopServiceUrl));
            default:
                throw Error();
        }
    }
}
