class UI {
    constructor(library) {
        this.library = library;

        this.booksDisplay = null;
        this.modal = null;
        this.form = null;
        this.addBookBtn = null;
        this.cancelBtn = null;
        this.submitBtn = null;
    }

    init() {
        this.booksDisplay = document.getElementById("books-display");
        this.modal = document.getElementById("book-modal");
        this.form = document.getElementById("book-form");
        this.addBookBtn = document.getElementById("add-btn");
        this.cancelBtn = document.getElementById("cancel-btn");
        this.submitBtn = document.getElementById("submit-btn");

        this.bindEvents();
        this.render();
    }

    bindEvents() {
        this.addBookBtn.addEventListener("click", () => this.openBookModal());
        this.cancelBtn.addEventListener("click", () => this.closeBookModal());

    }

    render() {
        this.booksDisplay.replaceChildren();

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

    openBookModal() {
        this.form.reset();
        this.modal.showModal();
        this.form.elements.author.focus();
    }

    closeBookModal() {
        this.modal.close();
    }
}

export { UI };
