import { Library } from "./library.js";
import { UI } from "./ui.js";

const library = new Library();

library.addBookToLibrary(
    "Test Book 1",
    "John Doe",
    666,
    false,
)

library.addBookToLibrary(
    "Test Book 2",
    "Jane Doe",
    123,
    false,
)

library.addBookToLibrary(
    "Test Book 3",
    "Bob Marley",
    999,
    false,
)

library.addBookToLibrary(
    "Test Book 4",
    "Zach Collins",
    250,
    true,
)

const ui = new UI(library);
ui.init();
