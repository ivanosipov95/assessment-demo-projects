import {HttpTransport} from "../util/http-transport";
import {envConfig} from "../config/env-config";
import {Author} from "../models/author";
import {AuthorDao} from "./author-dao";
import {DaoFactory} from "../util/dao-factory";
import {DaoType} from "../util/dao-type";

export const authorResolvers = {
    authors: async () => {
        const authorDao = DaoFactory.getInstance(DaoType.AUTHOR) as AuthorDao;

        try {
            const authors = await authorDao.getAll();

            return authors;
        } catch (e) {
            console.error(e);
        }
    },

    author: async (_: any, args: any) => {
        const http = new HttpTransport<Author>(envConfig.authorServiceUrl);
        const authorDao = new AuthorDao(http);

        try {
            const author = await authorDao.getById(args.id);

            return author;
        } catch (e) {
            console.error(e);
        }

    }
};
