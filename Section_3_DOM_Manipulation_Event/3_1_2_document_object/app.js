/* ********************************************
 !       Examining The Document Object
**********************************************/
/* 
let val;

// แสดงหน้า webpage ทั้งหมดที่
val = document;
/
// show all tag element
val = document.all;
// show tag element with array
val = document.all[2];

// * Property
val = document.all.length; // มี tag กี่อัน
val = document.head; // แสดงข้อมูลของ tag ว่ามีอะไรบ้าง
val = document.body;
val = document.doctype;
val = document.domain; // root url
val = document.URL; // มาทั้งหมด
val = document.characterSet;
val = document.contentType;

val = document.forms; // เรียก form มาทั้งหมด
val = document.forms[0];
val = document.forms[0].id; // id ของ tag
val = document.forms[0].method;

val = document.links; // ดูลิงค์ทั้งหมด
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className; // * ใช้ camel case เรียกดู class
val = document.links[0].classList; // ดูว่า class ของอันแรกมีกี่อัน เป็น array
val = document.links[0].classList[0];

val = document.images; // ถ้าไม่มีก็จะเป็น empty

val = document.scripts; // array ของ script ทุกอัน
val = document.scripts[2].getAttribute("src"); // เรียกดูค่าของ <script src="" ..

// Advance หน่อย เรียก attribute มาดูโดยใช้ forEach .. และ forEach ใช้ได้เฉพาะ array

let scripts = document.scripts;
// จะขึ้น error เพราะ forEach ใช้ได้เฉพาะ array

let scriptArray = Array.from(scripts);
scriptArray.forEach(function(script) {
    console.log(script.getAttribute("src"));
    // variable.forEach(function() {})
});

// Output
console.log(val);
 */
/////////////////////////////////////////////////////