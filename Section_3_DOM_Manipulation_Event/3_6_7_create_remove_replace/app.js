/* ********************************************
 !            Creating Element
**********************************************/
/* 
// สร้าง element ใหม่ที่เป็น list item
const li = document.createElement("li");

// * เพิ่ม class ใน tag element
li.className = "collection-item";

// * เพิ่ม ID ใน tag element
li.id = "new-item";

// * Add Attribute สีเหลืองคือต้องมี argument ระบุค่า
li.setAttribute("title", "New Item");

// Create text node and append
// ? createTextNode คือการสร้างข้อความ "Hello World"
// ? appendChild คือ เพิ่ม child ข้อความ "Hello World" ใน tag li
li.appendChild(document.createTextNode("Hello Wolrd"));

// ? Append li as child to ul >> สร้าง li ไว้ท้ายสุด
document.querySelector("ul.collection").appendChild(li); // จะเลือก ul.collection ก่อน เพิ่ม li ไว้ท้ายสุด (appendChild ตัวแปร li เข้าไป)

//? EX2 Create new link element คล้ายๆ อันบน คือสร้าง tag ก่อน
const link = document.createElement("a");
// add class ให้ a tag
link.className = "delete-item secondary-content";
//? Add icon html อันนี้สร้าง html เข้าไปใน tag a link
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li (เอา tag a ไปไว้ใน li เหมือนที่เอา li ไว้ใน ul)
li.appendChild(link);

// Output
console.log(li);
 */
/////////////////////////////////////////////////////

/* ********************************************
 !        Remove & Replace Elements
**********************************************/

// * REPLACE ELEMENT
/* 
// * STEP 1 :Create Element
const newHeading = document.createElement("h2");
// Add id
newHeading.id = "task-title";
// New text Node
//? appendChild คือ เพิ่มอะไรก็ตาม ให้เป็น child โดยมี h2 เป็น parent
newHeading.appendChild(document.createTextNode("Task List"));

// * STEP 2 : ดึง element เดิมที่เราจะแก้ไข
const oldHeading = document.querySelector("#task-title");

// *STEP 3 : เรียก Parent ออกมา เพื่อที่จะ replace child ของ parent "card-action"
const cardAction = document.querySelector(".card-action");

// * STEP 4 : Replace
cardAction.replaceChild(newHeading, oldHeading); // อันใหม่ เปลี่ยนทับอันเก่า
 */
// * REMOVE ELEMENT จะลบ list item ออก
/* 
const lis = document.querySelectorAll("li"); // ดู li ว่ามีกี่อัน 
const list = document.querySelector("ul"); // ดู tag ul ว่ามี child อะไรบ้าง

// ? querySelectorAll คือ เรียกดู parent ทั้งหมด มีกี่อัน มีกี่ tag
// ? querySelector คือเรียก parent มาดู parent กับ child

// * Remove list item
lis[0].remove(); // ลบ li อันดับแรกออก

// * Remove child element
list.removeChild(lis[3]); // ลบ child อันดับ 2 โดยมี ul เป็น parent
 */
/////////////////////////////////////////////////////
/* 
// * CLASS & ATTRIBUTE
// * STEP 1 :  ดึง li และ tag ที่ต้องการแก้ไขขึ้นมา
const firstLi = document.querySelector("li:first-child");

// <li>
//   <a><i></i></a>
// </li>

// จะดึง tag a ขึ้นมา ซึ่งเป็น child ของ firstLi
const link = firstLi.children[0];

// * STEP 2 : ดู class และ id ที่อยากแก้
// CLASS
let val;
val = link;
val = link.className; // มี class 2 อัน
val = link.classList;
// เข้าไปแต่ละ class
val = link.classList[0];

//* เพิ่ม class Name , ลบ class
link.classList.add("test"); // เพิ่ม test

link.classList.remove("test"); // ลบ test

// Attribute
// เรียกดู
val = link.getAttribute("href");
// กำหนดค่าให้ attribute
val = link.setAttribute("href", "http://google.com"); // link ก็จะเข้า google
val = link.setAttribute("title", "Google"); // เพิ่ม attribute ใหม่ให้ tag
/// Remove Attribute
link.removeAttribute("title");
val = link.hasAttribute("title"); // ดูว่ามี href มั้ย (true or false)

console.log(val);
 */
/////////////////////////////////////////////////////
