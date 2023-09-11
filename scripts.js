const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return `${title} by ${author}, ${pages}, ${read}`
  }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "208 pages", "not read yet");
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet");
const book3 = new Book("The Catcher in the Rye", "J. D. Salinger", "234 pages (may vary)", "not read yet");
const book4 = new Book("To Kill a Mockingbird", "Harper Lee", "336 pages", "not read yet");
const book5 = new Book("The Lion, The Witch and The Wardrobe", "C. S. Lewis", "202 pages", "not read yet");
const book6 = new Book("Don Quixote Part 1", "Miguel de Cervantes", "519 pages", "not read yet");
const book7 = new Book("Fahrenheit 451", "Ray Bradbury", "158 pages", "not read yet");
const book8 = new Book("Nineteen Eighty-Four", "George Orwell", "328 pages", "not read yet");
const book9 = new Book("The Adventures of Tom Sawyer", "Mark Twain", "274 pages", "not read yet");
const book10 = new Book("Dune", "Frank Herbert", "896 pages", "not read yet");