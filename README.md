# The Library

A simple library management application built as part of **The Odin Project's JavaScript curriculum**.

This project allows users to add books, track whether they have been read, filter books by read status, and remove books from the library. Data is persisted in the browser using `localStorage`.

## Live Features

- Add books through a modal form
- Mark books as read or unread
- Remove books from the library
- Filter books by:
  - All Books
  - Read Books
  - Unread Books
- Automatic persistence with `localStorage`
- Responsive card-based layout

## Purpose

The primary goal of this project was to practice modern JavaScript concepts while building a small but complete client-side application.

Concepts demonstrated include:

- ES6 Classes
- Modules (`import` / `export`)
- Separation of concerns
- Event delegation
- DOM manipulation
- Local storage persistence
- Form handling and validation
- Single source of truth state management
- Basic routing using URL hash fragments

## Project Structure

```text
src/
├── js/
│   ├── book.js
│   ├── library.js
│   ├── ui.js
│   └── main.js
├── css/
│   └── styles.css
└── index.html
```

### Book

The `Book` class represents an individual book in the library.

Responsibilities:

- Store book data
- Generate unique IDs
- Toggle read status
- Reconstruct book instances from stored JSON

### Library

The `Library` class manages the application's book collection.

Responsibilities:

- Add books
- Delete books
- Retrieve books
- Filter books by read status
- Persist data to local storage
- Load data from local storage

### UI

The `UI` class handles all user interactions and rendering.

Responsibilities:

- Render book cards
- Manage modal behavior
- Handle form submission
- Process user actions
- React to route changes

### Main

The application entry point.

Responsibilities:

- Create application objects
- Load saved data
- Initialize the UI

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Browser Local Storage API

## What I Learned

While building this project, I focused on:

- Organizing code with classes and modules
- Designing a simple object-oriented application structure
- Persisting application state between sessions
- Using event delegation to reduce event listeners
- Separating business logic from UI logic
- Working with the `<dialog>` element for modal interactions

## Future Improvements

Possible future enhancements include:

- Edit existing books
- Search functionality
- Sort options
- Multiple library collections
- Book cover images
- Better accessibility support
- More advanced filtering and statistics

## Acknowledgements

This project was completed as part of **The Odin Project** JavaScript curriculum.

https://www.theodinproject.com/
