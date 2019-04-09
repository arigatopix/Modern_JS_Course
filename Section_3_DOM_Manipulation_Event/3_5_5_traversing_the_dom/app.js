/* ********************************************
 !            Traversing The DOM 
**********************************************/
//* Traversing Move : Up and down เลือก element อันบน อันล่างได้ จากพวก element sibling

let val;

// อย่าลืมว่ามันจะเรียกแค่ตัวแรกตัวเดียว แต่เอา child มาแสดงด้วย
const list = document.querySelector("ul.collection");

val = list;

/////////////////////////////////////////////////////

//? childNodes / firstChild / lastChild / parentNode เป็น nodelist แสดง child ทั้งหมด 
// ? ข้อมูลจะเยอะ เพราะมี text ด้วย
 
// ul เป็น parent ของ li และ li เป็น child ของ ul
//* Get child nodes เอา node list ของ child มาทั้งหมด
/*
val = list.childNodes;
// แสดง Node มาเยอะกว่า HTMLCollection
// Node เป็น array


val = list.childNodes[0];
//* nodeName คือชื่อของ tag

val = list.childNodes[1].nodeName;
val = list.childNodes[3].nodeType;

// ความหมายของ nodeType
// 1 - Element
// 2 - Attribute
// 3 - Text
// 8 - Comment
// 9 - Document
// 10 - DocumentType

// จะได้ nodeList ของ ul แต่ว่ามันจะนับ text ที่เป็น line break เข้ามาด้วย ไม่ได้มีสมาชิกแค่ li โดยนับตั้งแต่ text เป็นอันแรกสุด
console.log(val);
 */
/////////////////////////////////////////////////////

// ? children  / elementChild / firstElementChild / lastElementChild เป็น HTML Collection

//* Get Childern element node (ได้ HTML Collection แต่จะไม่มี text ได้สมาชิก li จริงๆ)
// Children เหมือนกัน querySelectorAll
/* 
val = list.children;
val = list.children[1];
list.children[1].textContent = "Hello";

//* Children of children ก็คือ link ข้างใน
val = list.children[0].children;
// list.children[0].children[0].id = "test-link"; // แก้ id
val = list.children[0].children[0];
 */
/////////////////////////////////////////////////////
/* 
// * First Child (nodeList)
val = list.firstChild;

// * First element child จะเอา li ออกมา ข้าม text (childNode)
val = list.firstElementChild;
 */
/////////////////////////////////////////////////////
/* 
// Last Child
val = list.lastChild;
val = list.lastElementChild; // แสดงแค่ li จริงๆ

// นับ Children Element
val = list.childElementCount;
 */
/////////////////////////////////////////////////////

//? *** Get parent (Single DOM) สุดได้แค่ block เดียวกัน ***

const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
/*
val = listItem.parentNode; //เรียกดู parent และจะแสดง child ออกมาด้วย เหมือน Single DOM Selector
val = listItem.parentElement; 

// ดู parent ของ ul (ขยับขึ้น)
// val = listItem.parentElement.parentElement;
 */
/////////////////////////////////////////////////////

//? **** Get sibling *** (พี่น้อง)

// * nodelist
// Get Next Sibling
val = listItem.nextSibling.nextSibling; 
// Get Previous Sibling
// val = listItem.previousSibling; // text

// * HTML Collection
val = listItem.nextElementSibling;
// Get Previous Sibling
val = listItem.previousElementSibling; // null เพราะว่า List item เป็นอันแรก

// tag ต่อไป อันที่ 3
val = listItem.nextElementSibling.nextElementSibling;
// ลอง previous sibling จะกลับไปอันที่ 2
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;
 
console.log(val);
