import {bookResolvers} from "../book/book-resolvers";
import {authorResolvers} from "../author/author-resolvers";

export const resolvers = {
    Query: {
        books: bookResolvers.books,
        book: bookResolvers.book,
        authors: authorResolvers.authors,
        author: authorResolvers.author,
    },
    Book: bookResolvers.Book
};
