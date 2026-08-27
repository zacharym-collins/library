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

    toggleRead() {
        this.read = !this.read;
        return this;
    }
}

export { Book };
