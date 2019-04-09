/* ********************************************
 !    Event Listeners & The Event Object
**********************************************/
// Event listener คือการกำหนดว่าต่อไปจะให้ UI ไปทางไหน
/* 
document.querySelector(".clear-tasks").addEventListener("click", function() {
    console.log("Hello World");
    // เมื่อคลิกแล้วให้แสดงข้อความ ปกติ a จะมีพฤติกรรมเข้าเวบใหม่ ต้องไปเซต href="#" หรือใส่ preventDefault คือไม่ต้องไปไหน
    // e.preventDefault();
    // event จะนับไปเรื่อยๆ ว่ามีการคลิกกี่ครั้ง
});
 */
/////////////////////////////////////////////////////
/* 
// ให้เรียกผ่าน function ส่วนมากจะให้ตั้งชื่อ function จะได้เรียกใช้ได้ง่ายๆ เข้าใจง่าย
document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
    // console.log('Clicked');

    let val;

    val = e; // พอ click จะแสดงข้อมูลมาทั้งหมดว่า คลิกที่ไหน target อะไร ตามตัวอย่างใส่ไว้ที่ a tag

    //? Event target element แสดงข้อมูลหลังจาก click ปุ่ม CLEAR TASKS

    val = e.target;
    val = e.target.id;

    val = e.target.className;
    val = e.target.classList;

    // เปลี่ยน text หลังจากคลิก
    e.target.innerText = "Hello";

    // Event Type คือดูว่า event listener ที่เราใช้ เป็น type อะไร
    val = e.type;

    // Event Timestamp
    val = e.timeStamp;

    // Coords event relative to the window คือดูว่า client คลิกตรงไหน บอกเป็น pixel
    val = e.clientY;
    val = e.clientX;
    // Offset คือบอกว่า client ทำอะไรตรงไหน relative to Button
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}
 */
/////////////////////////////////////////////////////

/* ********************************************
 !              Mouse Events
**********************************************/
/* 
const clearBtn = document.querySelector(".clear-tasks"); // btn
const card = document.querySelector(".card"); // พื้นที่ทั้งหมดของ task
const heading = document.querySelector("h5");

//* Click : แสดง event ว่า click
clearBtn.addEventListener("click", runEvent);
//* Double Click (dblclick)
clearBtn.addEventListener("dblclick", runEvent);
// //* MouseDown (mousedown) คือคลิกค้างไว้จะแสดง event
clearBtn.addEventListener("mousedown", runEvent);
// MouseUp คือตอนปล่อยเมาส์
clearBtn.addEventListener("mouseup", runEvent);

// * Mouse Enter คือ เอาเมาส์เข้ามาในพื้นที่
card.addEventListener("mouseenter", runEvent);
// Mouse leave คือ เอาเมาส์ออกจากพื้นที่
card.addEventListener("mouseleave", runEvent);

// * Mouse Over คือ เมาส์อยู่บนพื้นที่ card เปลี่ยนจาก tag นึงไปยัง tag นึง
card.addEventListener("mouseover", runEvent);
// * Mouse Out คือ เอาเมาส์ ขยับออกจาก tag แต่ยังอยู่บน card
card.addEventListener("mouseout", runEvent);

// * Mousemove คือจับว่ามีการขยับเมาส์ไปเท่าไหร่ ใช้คู่กับพวกจับ coords
card.addEventListener("mousemove", runEvent);

// Event Handler ดูว่าเราเรียกใช้งาน event อะไรอยู่
function runEvent(e) {
    console.log(`EVENT TYPE : ${e.type}`);

    // ให้แสดงผล แทนที่ h5 เพื่อจับว่าเมาส์วิ่งไปทางไหน
    // heading.innerHTML = `MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;

    // ลองแสดงผล background ตามที่เมาส์ขยับ rgb(r,g,b); แสดงได้แค่ 0-255
    document.body.style.background = `rgb(${e.offsetX},${e.offsetY},40)`;
}
 */
/////////////////////////////////////////////////////

/* ********************************************
 !          Keyboard & Input Event
**********************************************/

const form = document.querySelector("form"); // เลือก tag form ถ้ามีหลายฟอร์มอาจจะเรียก form #id หรือ class
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
// const select = document.querySelector('select');
/* 
// Clear default value ที่ html เซ็ตไว้
taskInput.value = "";

form.addEventListener("submit", runEvent);

function runEvent(e) {
    console.log(`EVENT TYPE : ${e.type}`);

    // แสดงค่าที่ submit มา
    console.log(taskInput.value);

    // ไม่ให้มัน redirect ไปหน้าอื่น ตามที่มันควรจะเป็น (stop behavior)
    e.preventDefault();

    console.log(e.target.id);
}
 */
/////////////////////////////////////////////////////

// // * รับค่า keyboard (keydown)
// taskInput.addEventListener("keydown", runEvent);

// // * Keyup แสดงค่าเมื่อยก key
// taskInput.addEventListener("keyup", runEvent);

// // * Keypress  คือปกติทั่วไป
// taskInput.addEventListener("keypress", runEvent);

// // * Focus เมื่อคลิกที่ input
// taskInput.addEventListener("focus", runEvent);

// // * Blur คือเมื่อคลิกทีี focus แล้วออกมาคลิกนอก input
// taskInput.addEventListener("blur", runEvent);

// // * CUT text (ctrl + x)
// taskInput.addEventListener("cut", runEvent);

// // * Paste text (ctrl + v)
// taskInput.addEventListener("paste", runEvent);

// // * Input เก็บค่าเมื่อเริ่มพิมพ์, cut, paste ก็ได้หมด
// taskInput.addEventListener("input", runEvent);

// * Select เกบค่าเมื่อมีการเปลี่ยนค่า ! ใช้ไม่ได้เพราะไม่มี form select
// select.addEventListener("select", runEvent);

// function runEvent(e) {
//     console.log(`EVENT TYPE : ${e.type}`);
//     // แสดงค่าที่รับมาจาก keyboard (taget.value)
//     console.log(e.target.value);

//     //? แสดงค่าทันที ที่รับค่าจาก keyboard คล้ายๆ angular ทำได้
//     heading.innerText = e.target.value;
// }

/////////////////////////////////////////////////////

/* ********************************************
 !       Event Bubbling & Delegation
**********************************************/
/* 
// * EVENT BUBBLING : คือเรียกมา 1 block แล้วโปรแกรมดันแสดง parent มาด้วย
document.querySelector(".card-title").addEventListener("click", function() {
    //? ต้องคลิกที่ตัว Task List
    console.log("card title");
});

// เลือก parent ของ .card-title
document.querySelector(".card-content").addEventListener("click", function() {
    console.log("card content");
});

// parent ของ card content
document.querySelector(".card").addEventListener("click", function() {
    console.log("card");
});

// parent ของ card
document.querySelector(".col").addEventListener("click", function() {
    console.log("col");
});
 */
// ? จริงๆ เรากำหนดให้ click ที่ className แต่ละตัว โปรแกรมถึงจะแสดง log
// ? ผลของ bubling คือมันมันผลต่อ parent ด้วย
// ? DELEGATION คือตรงกันข้ามกับ BUBLING

/////////////////////////////////////////////////////
// * EVENT DELEGATION
/* 
//? เป้าหมายคือจะลบ listitem เมื่อกด a tag

const delItem = document.querySelector(".delete-item");

delItem.addEventListener("click", deleteItem);
// ? จะมีผลแค่อันแรกอันเดียว อันอื่นลบไม่ได้

document.body.addEventListener("click", deleteItem);
// หมายความว่าคลิกที่ไหนก็ตาม จะแสดงได้หมดเลย
// ? จะต้องหาวิธีระบุให้แน่ๆ ว่าจะลบอันไหน

function deleteItem(e) {
    // แสดงว่ามันคลิกที่ไหน
    console.log(e.target);

    // parentElement คือ parent ของ icon และเรียก class name ชื่อเต็มออกมา ซึ่งมักไม่ค่อยใช้งานแบบนี้ จะใช้ classList แทน

    // วิธีระบุ  list item วิธีแรก
    // if (e.target.parentElement.className === "delete-item secondary-content") {
    //     console.log("delete item");
    // }

    // วิธีระบุให้ลบ list item วิธีที่ 2
    //? ให้ใช้แบบนี้แทน if ด้านบน จะได้ไม่ต้องเรียก class name ออกมาทั้งหมด
    if (e.target.parentElement.classList.contains("delete-item")) {
        console.log("delete item");
        // จะลบ list item ออก คือ remove parent ของ i tag >> อันแรกคือ a  >> อันสองคือ li
        e.target.parentElement.parentElement.remove();
    }
}
 */
/////////////////////////////////////////////////////
