/* ********************************************
 !    DOM Selectors For Single Elements
**********************************************/
//? มีสองแบบคือ getElementByID หรือ getElementByClassName
//? กับ querySelector แบบนี้จะเรียกได้ทั้ง id,classname, tag, etc.

//* Get Element by ID จะ return มาทั้ง block เลย
//? document.getElementById();
/* 
console.log(document.getElementById("task-title"));

//* Get things from the element
console.log(document.getElementById("task-title").id); // return ค่า id
console.log(document.getElementById("task-title").className);

//* Change Styling เปลี่ยน CSS ได้ทุก property เลย มักจะใช้กับ event
document.getElementById("task-title").style.background = "#333"; // อย่าลืมใส่ '' ที่ด้านซ้าย
document.getElementById("task-title").style.color = "#fff";
document.getElementById("task-title").style.padding = "5px";
// document.getElementById("task-title").style.display = "none"; // ใช้ร่วมกับ event อยากให้ซ่อนไว้เมื่อกดปุ่ม

//* Change content
document.getElementById("task-title").textContent = "Task List"; // เปลี่ยนข้อความใน tag
document.getElementById("task-title").innerText = "My Task"; // เหมือนกับข้างบน
document.getElementById("task-title").innerHTML =
    '<span style="color :red">Add new TASK</span>'; // เพิ่ม html ที่เรา fecth api มา

// ไม่ค่อยเพิ่มตรงๆ แบบนี้ ใช้ variable แทน เช่น
const taskTitle = document.getElementById("task-title");
taskTitle.textContent = "Task List"; // แทนค่า
 */
/////////////////////////////////////////////////////
/* 
//? document.querySelector();
// * ในวงเล็บใส่ค่า class หรือ id  หรือ tag ลงไป
// ? จะ return มาแค่ block เดียว อันแรกสุดที่โปรแกรมหาเจอ

console.log(document.querySelector("#task-title")); // id
console.log(document.querySelector(".card-title")); // className
console.log(document.querySelector("h5")); // เลือกจาก tag ถ้ามี h5 หลายๆ อัน มันจะเลือกมาอันแรก

// EX เลือกจาก tag แล้วเปลี่ยนค่า
document.querySelector("li").style.color = "red"; // จะเปลี่ยนอันแรกอันเดียว
document.querySelector("ul li").style.color = "blue"; // Neasted select จะเปลี่ยนอันแรกอันเดียว เช่นกัน

// Psudoclass
document.querySelector("li:last-child").style.color = "coral";
document.querySelector("li:nth-child(3)").style.color = "yellow";
document.querySelector("li:nth-child(4)").textContent = "Hello World";
document.querySelector("li:nth-child(odd)").style.background = "#ccc"; //! อย่าลืมว่ามันจะทำแค่ครั้งเดียว
document.querySelector("li:nth-child(even)").style.background = "#f4f4f4"; //! อย่าลืมว่ามันจะทำแค่ครั้งเดียว
 */
/////////////////////////////////////////////////////

/* ********************************************
 !    DOM Selectors For Multiple Elements
**********************************************/

//? Multiple element selector เก็บ id class แล้ว return html tag
// ? มีสองแบบคือ
// 1. getElementsByClassName | ได้ html collection
// 2. querySelectorAll | nodeList

// * Elements มี s

/////////////////////////////////////////////////////

//? document.getElementsByClassName
//* ได้ HTMLCollection ที่บอก tag และ className
/* 
// เลือกแต่ละ list item มา
const items = document.getElementsByClassName("collection-item");

console.log(items);
// แสดงรายละเอียดของแต่ละ className item
console.log(items[0]); //? เลือกทีละ item ก็ได้ เหมือนเรียก array ทั่วไป แต่ยังไม่ใช่ array

// เปลี่ยนได้ทีละหลายๆ อัน
items[0].style.color = "red";
items[3].textContent = "Hello";
 */
/////////////////////////////////////////////////////

// เลือกแบบ specific className เหมือน CSS ได้ เข้า div .class กรณี code เรามี ul,li ซ้ำกันหลายๆ ที่
/* 
const listItems = document
    .querySelector("ul")
    .getElementsByClassName("collection-item"); // หมายถึงเข้าไปดูที่ ul ก่อน แล้วเรียก class="collection-item" มาแสดงทั้งหมด
console.log(listItems);

// เรียกโดยตรง
let lis = document.getElementsByTagName("li");
// console.log(lis);

// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = "red";
// lis[3].textContent = "Hello";

//? NOTE : lis เหมือนจะเป็น array แต่ไม่ใช่
//* Converse HTML Collection into array เพราะข้อมูลที่ getElements มาไม่ใช่ array
// lis.reverse(); // จะใช้คำสั่ง array ไม่ได้

// เปลี่ยนแปลงเป็น array
lis = Array.from(lis);
// แสดงข้อความใน document
lis.forEach(function(li, index) {
    // อย่าลืมว่า forEach ใช้ได้กับ array เท่านั้นนะ
    // console.log(li.className);
    li.textContent = `${index} : Hello`;
    // วน loop ใน tag element (ใน array นั่นแหละ) จะเปลี่ยน element ทุกอัน
});

console.log(lis);
 */
/////////////////////////////////////////////////////

// ? document.querySelectorAll
/* 
//* NodeList : วิธีการเรียกใช้งาน ต่างจากด้านบนนิดหน่อย ต้องใช้ (tag.className)

// * querySelector จะเรียกใช้เหมือน CSS
// ไม่ต้อง converse เป็น array
// ไม่ต้องบอกว่า getElementBy ...  

const items = document.querySelectorAll("ul.collection li.collection-item");

//? ไม่ต้องเปลี่ยนเป็น array ใช้ forEach ได้เลย
items.forEach(function(item, index) {
    console.log(item.className);
    item.textContent = `${index} : Hello`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

//? เปลี่ยน li ที่เป็นคี่ให้หมดแบบ forEach
liOdd.forEach(function(li, index) {
    // index คือตัวเลข 0 ถึง 4
    li.style.background = "#ccc";
});

//? เปลี่ยน li ที่เป็นคู่ให้หมดแบบ for loop
for (var i = 0; i < liEven.length; i++) {
    liEven[i].style.background = "#666";
}

console.log(items);
 */
/////////////////////////////////////////////////////

// * SUMARY *
/* 
//? Single DOM Selector
console.log(document.getElementById("task-title"));
console.log(document.querySelector("#task-title"));
// single ได้มา block เดียว อันแรกเท่านั้น แต่เอา child มาด้วย
console.log(document.querySelector("ul")); 

//? Multiple DOM Selector : จะ return มาบอกว่าเรามี tag,id,class กี่อัน ใน document นั้น
// * HTML Collection
console.log(document.getElementsByTagName('ul'));
console.log(document.getElementsByTagName('li'));

// * nodeList
console.log(document.querySelectorAll("ul"));
console.log(document.querySelectorAll("li"));
 */
/////////////////////////////////////////////////////