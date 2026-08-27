import { Library } from "./library.js";

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
