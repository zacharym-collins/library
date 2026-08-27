import { Book } from "./book.js";

class Library {
    constructor() {
        this.books = [];
    }

    addBookToLibrary(title, author, pages, read) {
        const book = new Book(title, author, pages, read);
        this.books.push(book);
        return book;
    }
}

export { Library };
