import {bookResolvers} from "../book/book-resolvers";
import {authorResolvers} from "../author/author-resolvers";
import {shopResolvers} from "../shop/shop-resolvers";
import {entitiesResolver} from "../entities/entities-resolvers";

export const resolvers = {
    Query: {
        books: bookResolvers.books,
        book: bookResolvers.book,
        authors: authorResolvers.authors,
        author: authorResolvers.author,
        shops: shopResolvers.shops,
        shop: shopResolvers.shop,
        entities: entitiesResolver.entities
    },
    Book: bookResolvers.Book,
    Shop: shopResolvers.Shop,
    Entity: {
        __resolveType(obj: any, context: any, info: any) {
            if (obj.cost) {
                return 'Book';
            }

            if (obj.books) {
                return 'Shop';
            }

            if (obj.code) {
                return 'ReferenceData';
            }

            return 'Author';
        },
    },
};
