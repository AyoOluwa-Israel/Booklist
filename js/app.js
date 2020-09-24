
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
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
  <td><a href = "#" class = "delete" >X</a></td>
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
// Delete Book
UI.prototype.deleteBook = function(target){
  if(target.className === "delete"){
    console.log('hello');
    target.parentElement.parentElement.remove();
  }
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

// event listener for delete
document.getElementById('book-list').addEventListener(
  'click', function(e){


  // Instantiate UI
  const ui = new UI();

  // Delete Book
  ui.deleteBook(e.target);

  // Show message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
  }
)