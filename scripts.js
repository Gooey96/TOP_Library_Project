let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read}`
  }
}

function addBooksToLibrary(title, author, pages, read) {
  const createdBooks = new Book(title, author, pages, read);
  myLibrary.push(createdBooks);
}

const cardsHolder = document.getElementById('cards-holder');
const readCounter = document.getElementById('C-READ');
const unreadCounter = document.getElementById('C-UNREAD');
const totalCounter = document.getElementById('C-TOTAL');
const removeAllButton = document.querySelector('.nuke');
let r_Counter_Num = 0;
let u_Counter_Num = 0;

removeAllButton.addEventListener('click', () => {
  const cards = document.querySelectorAll('.cards');

  cards.forEach(card => {
    card.remove();
  })

  readCounter.textContent = 0;
  unreadCounter.textContent = 0;
  totalCounter.textContent = 0;

  myLibrary = [];
  r_Counter_Num = 0;
  u_Counter_Num = 0;
})

function readStatus(event) {
  const target = event.target;

  if(target.textContent == "Done Reading"){
    target.textContent = "Haven't Read";
    r_Counter_Num--
    readCounter.textContent = r_Counter_Num;
    u_Counter_Num++
    unreadCounter.textContent = u_Counter_Num;
  }else {
    target.textContent = "Done Reading";
    r_Counter_Num++
    readCounter.textContent = r_Counter_Num;
    u_Counter_Num--
    unreadCounter.textContent = u_Counter_Num;
  }
}

function removeCard(event) {
  const target = event.target;
  const deleteCounter = target.parentElement.lastChild.textContent;
  const indexNumber = target.parentElement.dataset.index;
  const allCards = document.querySelectorAll('.cards');
  let newDataValue = "";

  myLibrary.splice(indexNumber,1);

  myLibrary.forEach(book => {
    newDataValue = myLibrary.indexOf(book);
  })

  allCards.forEach(card => {
    card.dataset.index = newDataValue;
  })

  target.parentElement.remove();

  totalCounter.textContent = myLibrary.length;

  if(deleteCounter == "Done Reading") {
    r_Counter_Num--
    readCounter.textContent = r_Counter_Num;
  }else {
    u_Counter_Num--
    unreadCounter.textContent = u_Counter_Num;
  }
}

const libraryForm = document.getElementById('myForm');

libraryForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // This section is to get the input value.

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.querySelector('input[type=radio]:checked').value;

  // This section is to display the input value.

  const newCards = document.createElement('div');
  const removeButton = document.createElement('button');
  const statusButton = document.createElement('button');
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');
  const para3 = document.createElement('p');

  newCards.classList.add('cards');
  removeButton.classList.add('remove');
  statusButton.classList.add('status');
  para1.classList.add('text');
  para2.classList.add('text');
  para3.classList.add('text');

  removeButton.textContent = 'X';
  statusButton.textContent = read;
  para1.textContent = title;
  para2.textContent = author;
  para3.textContent = `${pages} pages`;

  removeButton.addEventListener('click', removeCard);
  statusButton.addEventListener('click', readStatus);

  newCards.appendChild(removeButton);
  newCards.appendChild(para1);
  newCards.appendChild(para2);
  newCards.appendChild(para3);
  newCards.appendChild(statusButton);
  cardsHolder.appendChild(newCards);

  addBooksToLibrary(title, author, pages, read);

  totalCounter.textContent = myLibrary.length;

  myLibrary.forEach(book => {
    newCards.dataset.index = myLibrary.indexOf(book);
  })

  if(read == "Done Reading") {
    r_Counter_Num++
    readCounter.textContent = r_Counter_Num;
  }else {
    u_Counter_Num++
    unreadCounter.textContent = u_Counter_Num;
  }

  let reset = libraryForm.reset();
  reset;
})