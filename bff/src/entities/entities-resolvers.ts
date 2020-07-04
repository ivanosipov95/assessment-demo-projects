import {DaoFactory} from "../util/dao-factory";
import {DaoType} from "../util/dao-type";
import {BookDao} from "../book/book-dao";
import {AuthorDao} from "../author/author-dao";
import {ShopDao} from "../shop/shop-dao";

const searchEntityStrategies: { [key: string]: any } = {
    [DaoType.BOOK]: async (text: string) => {
        const bookDao = DaoFactory.getInstance(DaoType.BOOK) as BookDao;
        return await bookDao.getAll(text);
    },

    [DaoType.AUTHOR]: async (text: string) => {
        const authorDao = DaoFactory.getInstance(DaoType.AUTHOR) as AuthorDao;
        return await authorDao.getAll(text);
    },

    [DaoType.SHOP]: async (text: string) => {
        const shopDao = DaoFactory.getInstance(DaoType.SHOP) as ShopDao;
        return await shopDao.getAll(text);
    },

    ALL: async (text: string) => {
        const bookDao = DaoFactory.getInstance(DaoType.BOOK) as BookDao;
        const authorDao = DaoFactory.getInstance(DaoType.AUTHOR) as AuthorDao;
        const shopDao = DaoFactory.getInstance(DaoType.SHOP) as ShopDao;

        const [books, authors, shops] = await Promise.all([bookDao.getAll(text), authorDao.getAll(text), shopDao.getAll(text)]);

        return [...books, ...authors, ...shops];
    },
};

export const entitiesResolver = {
    entities: async (_: any, args: any) => {
        const {text, type} = args;

        try {
            const search = searchEntityStrategies[type];

            return search(text);
        } catch (e) {
            console.error(e);
        }
    },
};


