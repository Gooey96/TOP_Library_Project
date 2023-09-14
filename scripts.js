let myLibrary = [];

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

function addBooksToLibrary(...args) {
  myLibrary = args;
}

addBooksToLibrary(book1, book2, book3, book4, book5, book6, book7, book8, book9, book10);

const container = document.querySelector('.container');

function displayBooks() {
  myLibrary.forEach(book => {
    const para = document.createElement('p');
    para.textContent = book.info();
    para.dataset.index = myLibrary.indexOf(book);
    container.appendChild(para);
  });
}

displayBooks();

// This code is probably useless but 
// something is better than nothing
const para = document.getElementsByTagName('p');
const count = para.length;

for(let i = 0; i < count; i++) {
  const p_array = para[i];

  p_array.addEventListener('click', function() {
    p_array.remove();
  })
}

console.log(book1.info());
console.log(book2.info());
console.log(book3.info());
console.log(book4.info());
console.log(book5.info());
console.log(book6.info());
console.log(book7.info());
console.log(book8.info());
console.log(book9.info());
console.log(book10.info());
console.log(myLibrary);