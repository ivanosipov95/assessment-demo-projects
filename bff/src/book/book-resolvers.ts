import {HttpTransport} from "../util/http-transport";
import {envConfig} from "../config/env-config";
import {BookDao} from "./book-dao";
import {Book} from "../models";

export const bookResolvers = {
    books: async () => {
        const http = new HttpTransport<Book>(envConfig.bookServiceUrl);
        const bookDao = new BookDao(http);

        try {
            const books = await bookDao.getAll();

            return books;
        } catch (e) {
            console.error(e);
        }
    },

    book: async (_: any, args: any) => {
        const http = new HttpTransport<Book>(envConfig.bookServiceUrl);
        const bookDao = new BookDao(http);

        try {
            const book = await bookDao.getById(args.id);

            return book;
        } catch (e) {
            console.error(e);
        }

    }
};
