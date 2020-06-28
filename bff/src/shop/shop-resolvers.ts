import {ShopDao} from "./shop-dao";
import {DaoFactory} from "../util/dao-factory";
import {DaoType} from "../util/dao-type";
import {Shop} from "../models/shop";
import {BookDao} from "../book/book-dao";

export const shopResolvers = {
    Shop: {
        books: async (shop: Shop, args: any) => {
            const bookDao = DaoFactory.getInstance(DaoType.BOOK) as BookDao;

            try {

                let map = (shop.books as string[]).map((id: string) => bookDao.getById(id));
                const books = await Promise.all([...map]);

                return books;
            } catch (e) {
                console.error(e);
            }
        },
    },

    shops: async () => {
        const shopDao = DaoFactory.getInstance(DaoType.SHOP) as ShopDao;

        try {
            return await shopDao.getAll();
        } catch (e) {
            console.error(e);
        }
    },

    shop: async (_: any, args: any) => {
        const shopDao = DaoFactory.getInstance(DaoType.SHOP) as ShopDao;

        try {
            return await shopDao.getById(args.id);
        } catch (e) {
            console.error(e);
        }
    }
};
