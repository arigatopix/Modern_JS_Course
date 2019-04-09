/****
 * * ES6 * */

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
    // Create tag tr
    const row = document.createElement('tr');
    // insert cols innerHTML to tr
    // เรียก value ใน object
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><i class="fa fa-remove delete"></i></td>
    `;

    // Append child ในวงเล็บคือค่าที่จะเพิ่ม
    list.appendChild(row);
  }

  clearField() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  showAlert(message, className) {
    // Create div 
    const div = document.createElement('div');
    // Add className
    div.className = `alert ${className}`;
    // Add text ใน div
    div.appendChild(document.createTextNode(message));

    // จะแทรก div ใน tag บนสุดของ 
    // Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    // แทรกใน parent ระหว่าง form
    container.insertBefore(div, form);

    // Set timeout after 3 sec
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    // ถ้ากดโดนปุ่ม delete ให้ลบ tr ซึ่งเป็น parentElement of parentElement ของ <i></i>
    if (target.classList.contains('delete')) {
      target.parentElement.parentElement.remove();
    }
  }
}

// Local Storage class ค่า static เพราะเป็นค่าจาก LS
class Store {
  static getBooks() {
    // getItem
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      // ถ้ามีข้อมูลใน local storage ให้ดึง
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();
    // Loop เพื่อเอาค่าใน Object
    books.forEach(function (book) {
      const ui = new UI;

      // Add book to UI
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    // setItem
    // const เพราะ ไม่ได้เปลี่ยนแปลงค่า หรือ reassign 
    // Class.getBooks เพราะเป็นค่า static ดึงค่าเก่ามา
    const books = Store.getBooks();

    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {

    // เชคผ่าน isbn

    const books = Store.getBooks();

    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        // splice array ออก
        books.splice(index, 1);
      }
    });
    //! ต้องไม่ลืม push กลับ local storage 
    localStorage.setItem("books", JSON.stringify(books));
  }
}
// ----------------------------------------------------------------------------

// ** WHEN ** RUN เมื่อ
// Add book
document.getElementById('book-form').addEventListener('submit', function (e) {
  // Get form Values
  // อย่าลืม const เพื่อประกาศตัวแปร
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  // Create Book object : Instantiate book คือการยกตัวอย่าง
  const book = new Book(title, author, isbn);

  // * Instantiate UI 
  // สร้าง function prototype ให้ UI add,delete,show alert
  const ui = new UI();

  // Validate (ตรวจสอบว่าข้อมูลที่ใส่มาถูกต้องมั้ย)
  if (title === '' || author === '' || isbn === '') {
    // Error Alert
    ui.showAlert('Please fill in all fields', 'error');
    // ใส่ข้อความ กับ class name ที่เราสร้างไว้ใน css
  } else {
    // Add new book , เรียกใช้งานผ่าน function prototype
    ui.addBookToList(book);

    // ADD TO LOCAL STORAGE ** เป็น STATIC ต้องใช้ Class เรียก
    Store.addBook(book);

    // Success Alert
    ui.showAlert('Book Added', 'success');

    // Clear field ในกล่อง input
    ui.clearField();

  }
  e.preventDefault();
});

// Event listener for delete
// STEP คือ จะให้ทำอะไร ลบ
// ลบเมื่อไหร่ .. เมื่อ click
document.querySelector('#book-list').addEventListener('click', function (e) {

  // ต้องสร้าง UI.prototype ด้วย เพราะอยู่คนละ block คนละ function
  const ui = new UI();

  // Delete Book 
  ui.deleteBook(e.target);

  //*** Remove from Local Storage โดยไปลบผ่าน isbn (ใช้ previousElementSiblng เพราะเรากดที่ x มันเป็น sibling ข้างกัน)
  //*** เอาเฉพาะ text isbn คือ e.target.parentElement.previousElementSibling.textContent

  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // show alert
  ui.showAlert('Book Removed', 'success');

  e.preventDefault();
});

//! เมื่อมี load Local Storage มาแสดง ต้องใช้ DOM Load Event
// ให้ดึงข้อมูล STATIC ขึ้นมา
document.addEventListener('DOMContentLoaded', Store.displayBooks);