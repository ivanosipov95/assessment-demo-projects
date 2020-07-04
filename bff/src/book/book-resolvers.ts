import {BookDao} from "./book-dao";
import {DaoFactory} from "../util/dao-factory";
import {DaoType} from "../util/dao-type";
import {AuthorDao} from "../author/author-dao";
import {Book} from "../models";
import {ReferenceDataDao} from "../reference-data/reference-data-dao";
import {GraphQLResolveInfo} from "graphql";
import 'apollo-cache-control';
import {CacheScope} from "apollo-cache-control";

export const bookResolvers = {

    Book: {
        author: async (book: Book, args: any) => {
            const authorDao = DaoFactory.getInstance(DaoType.AUTHOR) as AuthorDao;

            try {
                return await authorDao.getById(book.author as string);
            } catch (e) {
                console.error(e);
            }
        },

        currency: async (book: Book, args: any, _: any, info: GraphQLResolveInfo) => {
            // dynamic cache example
            // info.cacheControl.setCacheHint({ maxAge: 2, scope: CacheScope.Public });

            const referenceDao = DaoFactory.getInstance(DaoType.REFERENCE_DATA) as ReferenceDataDao;

            try {
                return await referenceDao.getByCode(book.currency as string);
            } catch (e) {
                console.error(e);
            }
        },
    },
    books: async () => {
        const bookDao = DaoFactory.getInstance(DaoType.BOOK) as BookDao;

        try {
            return await bookDao.getAll();
        } catch (e) {
            console.error(e);
        }
    },

    book: async (_: any, args: any) => {
        const bookDao = DaoFactory.getInstance(DaoType.BOOK) as BookDao;

        try {
            return await bookDao.getById(args.id);
        } catch (e) {
            console.error(e);
        }
    }
};
