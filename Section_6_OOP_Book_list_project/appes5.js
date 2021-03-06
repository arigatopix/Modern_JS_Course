// --------------NOTE------------------

// use function สร้าง object constructor
// prototype สร้าง function
// หลักๆ ดูที่  Constructor กับ prototype
// ใช้ semi colon เมื่อ expression

// * Function Statement
// function UI() {

// }
// -------------------------------------------------------

// * Function Expression
// prototype มักใช้กับ function ที่ไม่ได้เรียกจาก Object ที่ถูกสร้าง (พวก this. อะไรทั้งหลาย)
// เรียก Static ไม่ผ่าน OBJECT คือ Store.prototype.getTaskFromLocalStorage();
// UI.prototype.addTask = function() {

// };

// -----------------------------------------

//TODO **** WHAT **** จะให้โปรแกรมทำอะไร

// * BOOK Constructor
// ข้อมูลหนังสือ แต่ละเล่ม title / author / ISBN
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// * UI Constructor
// แสดงค่า / รับค่าจาก UI แล้วเก็บใน table / Delete ข้อมูล / Show UI
function UI() {
    // ใช้ prototype ทำ function เช่น add,show alert, delete
}

function Store() {

}

// ----------------------------------------------------------------------------------------------------
//TODO  **** HOW **** function ใช้ UI.prototype

// Add Book to list to table
UI.prototype.addBookToList = function (book) {
    // จะสร้าง list เข้าไปในตาราง
    const list = document.getElementById("book-list");
    // Create tag tr
    const row = document.createElement("tr");
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
};

// Clear fields
UI.prototype.clearField = function () {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
};

// Error Aleart
UI.prototype.showAlert = function (message, className) {
    // Create div
    const div = document.createElement("div");
    // Add className
    div.className = `alert ${className}`;
    // Add text ใน div
    div.appendChild(document.createTextNode(message));

    // จะแทรก div ใน tag บนสุดของ
    // Get parent
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");

    // แทรกใน parent ระหว่าง form
    container.insertBefore(div, form);

    // Set timeout after 3 sec
    setTimeout(function () {
        document.querySelector(".alert").remove();
    }, 3000);
};

// Delete book from list
UI.prototype.deleteBook = function (target) {
    // ถ้ากดโดนปุ่ม delete ให้ลบ tr ซึ่งเป็น parentElement of parentElement ของ <i></i>
    if (target.classList.contains("delete")) {
        // ! ใช้ target.className ไม่ได้เพราะว่า <i class="fa fa-remove delete"></i> ต้องใส่ชื่อ class เต็มๆ
        target.parentElement.parentElement.remove();
    }
};
// ----------------------------------------------------------------------------------------------------
// Local Storage
// SAVE เข้า LS

Store.prototype.addBook = function (book) {
    // เพิ่มเข้าไปใน LS
    const books = Store.prototype.getBooks();

    books.push(book);

    // เก็บจาก array to string
    localStorage.setItem('books', JSON.stringify(books));
};

// ดึงข้อมูลจาก LS
Store.prototype.getBooks = function () {
    let books;

    // เช็คว่ามีใน LS มั้ย
    if (localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books')); // ได้ array
    }
    return books
};

// display เมื่อมี LS
Store.prototype.displayBooks = function () {
    const books = Store.prototype.getBooks();

    // ได้ array มา แต่ใน addBook ต้องการทีละ item (หนังสือทีละเล่ม)

    books.forEach(function (book) {
        UI.prototype.addBookToList(book);
    });
};

// Remove ออกจาก LS
Store.prototype.removeBook = function (isbn) {
    // ปกติแล้วจะใช้ text ใน content เทียบกับ LOCAL Storage
    // ในที่นี้ใช้ ISBN เพราะว่า เลข ISBN จะไม่ซ้ำ แต่ชื่อหนังสืออาจจะซ้ำ

    const books = Store.prototype.getBooks();

    books.forEach(function (book, index) {
        // ถ้า book.isbn จาก LS 
        // ISBN ที่ส่งมาจากการกดปุ่ม e.target
        if (book.isbn === isbn) {
            books.splice(index, 1); // ตัดออกจาก array
        }
    });

    // ! อย่าลืมส่งกลับไป LS
    localStorage.setItem("books", JSON.stringify(books));
};

// ----------------------------------------------------------------------------------------------------
//TODO **** WHEN **** Event listener
// Add book
document.getElementById("book-form").addEventListener("submit", function (e) {
    // Get form Values
    // อย่าลืม const เพื่อประกาศตัวแปร
    const title = document.getElementById("title").value,
        author = document.getElementById("author").value,
        isbn = document.getElementById("isbn").value;

    // Create Book object : Instantiate book คือการยกตัวอย่าง
    const book = new Book(title, author, isbn);

    // * Instantiate UI
    // สร้าง function prototype ให้ UI add,delete,show alert
    const ui = new UI();

    // const store = new Store();

    // Validate (ตรวจสอบว่าข้อมูลที่ใส่มาถูกต้องมั้ย)
    if (title === "" || author === "" || isbn === "") {
        // Error Alert
        ui.showAlert("Please fill in all fields", "error");
        // ใส่ข้อความ กับ class name ที่เราสร้างไว้ใน css
    } else {
        // Add new book , เรียกใช้งานผ่าน function prototype
        ui.addBookToList(book);

        Store.prototype.addBook(book);

        // Success Alert
        ui.showAlert("Book Added", "success");

        // Clear field ในกล่อง input
        ui.clearField();
    }

    e.preventDefault();
});

// Event listener for delete
// STEP คือ จะให้ทำอะไร ลบ
// ลบเมื่อไหร่ .. เมื่อ click
// ยังไง function deleteBook
document.querySelector("#book-list").addEventListener("click", function (e) {
    //! ต้องสร้าง UI.prototype ด้วย เพราะอยู่คนละ block คนละ function
    const ui = new UI();

    // Delete Book
    ui.deleteBook(e.target); // ได้ <i></i>

    // Remove from LS กดโดนปุ่ม x (i tag) แล้วเลือก td columns ของ isbn
    // ! อย่าลืมกำหนดเป็น textContent
    Store.prototype.removeBook(e.target.parentElement.previousElementSibling.textContent);


    // show alert
    ui.showAlert("Book Removed", "success");

    e.preventDefault();
});

// Display จากข้อมูล LOCAL STORAGE เมื่อมีการ reload page
document.addEventListener('DOMContentLoaded', Store.prototype.displayBooks);
// --------------------------------------------
