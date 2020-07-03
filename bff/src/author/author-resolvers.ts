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
        const authorDao = DaoFactory.getInstance(DaoType.AUTHOR) as AuthorDao;

        try {
            const author = await authorDao.getById(args.id);

            return author;
        } catch (e) {
            console.error(e);
        }

    }
};
