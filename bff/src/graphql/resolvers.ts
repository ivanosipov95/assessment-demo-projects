import {bookResolvers} from "../book/book-resolvers";
import {authorResolvers} from "../author/author-resolvers";
import {shopResolvers} from "../shop/shop-resolvers";

export const resolvers = {
    Query: {
        books: bookResolvers.books,
        book: bookResolvers.book,
        authors: authorResolvers.authors,
        author: authorResolvers.author,
        shops: shopResolvers.shops,
        shop: shopResolvers.shop
    },
    Book: bookResolvers.Book,
    Shop: shopResolvers.Shop
};
