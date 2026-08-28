import { Library } from "./library.js";
import { UI } from "./ui.js";

const library = new Library();
library.loadFromStorage();

const ui = new UI(library);
ui.init();
