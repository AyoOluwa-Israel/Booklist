// class book{
//     constructor(title, author, isbn){
//         this.title = title;
//         this.author = author;
//         this.isbn = isbn;
//     }
// }

// class ui{
//     static displaybooks(){
//         const storedBooks= [
//             {
//                 title: 'book one',
//                 author: 'Israel',
//                 isbn: 1231,
//             },
//             {
//                 title: 'book two',
//                 author: 'Isaac',
//                 isbn: 1233,
//             },
//             {
//                 title: 'book three',
//                 author: 'Israelite',
//                 isbn: 1233,
//             }
//         ];

//         const books = storedBooks;
//         books.forEach((book) => ui.addBookslist(book));
//     }

//     static addBookslist(book)


// {
//     const list = document.querySelector('#book-list');
//     const row = document.createElement('tr');

//     row.innerHTML =
//     '
//         <td>${book.title}</td>
//         <td>${book.author}</td>
//         <td>${book.isbn}</td>
//     <td><a href = "#" class = "btn-d  conste">X</a></td>';
//     list.appendChild(row);
// }


//Book constructor

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// Ui constructor

function UI() {}

UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');

  //Create tr element
  const row = document.createElement('tr');

  // insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href = "#" class = "delete">X</a></td>
  `;

  list.appendChild(row);
};


// show alert
UI.prototype.showAlert = function(message, className) {

  // Create div
  const div = document.createElement('div');

  // add classes
  div.className = `alert ${className}`;

  // Add Text
  div.appendChild(document.createTextNode(message));

  // Get Parent
  const container = document.querySelector('.container');

  // Get form
  const form = document.querySelector('#book-form');

  // insert alert

  container.insertBefore(div, form);

  // Timeout after 3secs 
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000);
}
// clear fields


UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};
//Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e) {

  // Get form values
  const title = document.getElementById('title').value;
  const  author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;



  // Instantiate Book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  //validation
  if (title === '' || author === '' || isbn === '') {
    //Error Alert 
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Show alert
    ui.showAlert('Book Added', 'success');
    //Clear Fields
    ui.clearFields();
  }


  e.preventDefault();

});