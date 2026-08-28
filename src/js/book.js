class Book {
    constructor(
        title,
        author,
        pages,
        read = false,
    ) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    static fromObject(obj) {
        const book = new Book(
            obj.title,
            obj.author,
            obj.pages,
            obj.read
        );

        book.id = obj.id;

        return book;
    }

    toggleRead() {
        this.read = !this.read;
        return this;
    }
}

export { Book };
