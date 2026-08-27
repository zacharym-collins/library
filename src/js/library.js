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

    getBookById(id) {
        return this.books.find(book => book.id === id);
    }

    getAllBooks() {
        return [...this.books];
    }

    getReadBooks() {
        return this.books.filter(book => book.read);
    }

    getUnreadBooks() {
        return this.books.filter(book => !book.read);
    }

    deleteBook(id) {
        const bookIndex = this.books.findIndex(
            book => book.id === id
        );

        if (bookIndex === -1) {
            throw new Error("Book not found");
        }

        const [deletedBook] = this.tasks.splice(
            bookIndex,
            1,
        );

        return deletedBook;
    }
}

export { Library };
