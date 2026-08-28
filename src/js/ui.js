class UI {
    constructor(library) {
        this.library = library;
        this.booksDisplay = null;
    }

    init() {
        this.booksDisplay = document.getElementById("books-display");
        this.render();
    }

    render() {
        if (this.library.books.length === 0) {
            const infoPara = document.createElement("p");
            infoPara.textContent = "No books to display. Press the add book button.";
            this.booksDisplay.appendChild(infoPara);
        } else {
            for (const book of this.library.books) {
                this.createBookElement(book);
            }
        }
    }

    createBookElement(book) {
        const article = document.createElement("article");
        article.classList.add("book-card");
        article.dataset.id = book.id;

        const titlePara = document.createElement("p");
        titlePara.textContent = book.title;

        const authorPara = document.createElement("p");
        authorPara.textContent = book.author;

        const pagesPara = document.createElement("p");
        pagesPara.textContent = `${book.pages} pages`;

        const readBtn = document.createElement("button");
        readBtn.textContent = !book.read ? "Not Read" : "Read";

        const delBtn = document.createElement("button");
        delBtn.textContent = "Remove";

        article.append(
            titlePara,
            authorPara,
            pagesPara,
            readBtn,
            delBtn
        );

        this.booksDisplay.appendChild(article);
    }
}

export { UI };
