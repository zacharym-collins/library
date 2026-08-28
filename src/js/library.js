import { Book } from "./book.js";

class Library {
    constructor() {
        this.books = [];
    }

    addBookToLibrary(title, author, pages, read) {
        const book = new Book(title, author, pages, read);
        this.books.push(book);
        this.saveToStorage();
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

    toggleBookRead(id) {
        const book = this.getBookById(id);
        book.toggleRead();
        this.saveToStorage();
        return book;
    }

    deleteBookFromLibrary(id) {
        const bookIndex = this.books.findIndex(
            book => book.id === id
        );

        if (bookIndex === -1) {
            throw new Error("Book not found");
        }

        const [deletedBook] = this.books.splice(
            bookIndex,
            1,
        );

        this.saveToStorage();

        return deletedBook;
    }

    saveToStorage() {
        localStorage.setItem(
            "libraryBooks",
            JSON.stringify(this.books)
        );
    }

    loadFromStorage() {
        const storedBooks = localStorage.getItem("libraryBooks");

        if (!storedBooks) {
            return;
        }

        const parsedBooks = JSON.parse(storedBooks);

        this.books = parsedBooks.map(book => Book.fromObject(book));
    }
}

export { Library };
