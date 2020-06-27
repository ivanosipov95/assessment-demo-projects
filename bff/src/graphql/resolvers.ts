import {bookResolvers} from "../book/book-resolvers";

export const resolvers = {
    Query: {
        books: bookResolvers.books,
        book: bookResolvers.book
    },
};
