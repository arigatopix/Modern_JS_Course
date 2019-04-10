/* ********************************************
 !       Local & Session Storage 
**********************************************/

// คือเก็บข้อมูลในเครื่องเรา ถ้ามีการ reload page ข้อมูลยังอยู่ใน local

// Local storage คือคงอยู่ตลอดไป จนกว่าเราจะลบมันออกจากเครื่อง
// Session Storage คือจะหายไปเมื่อเราปิด browser
// จะ save ได้ จะต้องปรับให้เป็น string (json.stringufy  และแปลงโดยใช้ json.parse)


// ? Set local storage item
// ลองปิด browser ดู มันยังอยู่ local
localStorage.setItem("name", "John");
localStorage.setItem("age", "30");

// เก็บแต่ละหัวข้อได้แค่ครั้งเดียว อันใหม่จะถูก overwrite
// localStorage.setItem("name", "Bas");
// localStorage.setItem("age", "26");

// ? Set session storage item
// ลองปิด browser ดู ปรากฎว่าหายไป
// sessionStorage.setItem("name", "Beth");

// * get from storage
const name = localStorage.getItem("name");
// console.log(name);
const age = localStorage.getItem("age");
// console.log(age);

// * Remove local storage item
// localStorage.removeItem("name");

// * Clear local storage
// localStorage.clear();

console.log(name, age);

/////////////////////////////////////////////////////

// เก็บข้อมูล task list ด้วย local storage

// ? NOTE
// * ดึงค่า local storage ใช้ json.parse
//  * เก็บค่าใน local ทำ array เป็น string ผ่าน json.stringify

document.querySelector("form").addEventListener("submit", function(e) {
    const task = document.getElementById("task").value;
    // เก็บ value ของ input
    // localStorage.setItem('task',task); // ? ปัญหาคือเก็บได้แค่บรรทัดเดียว ครั้งเดียว ครั้งถัดไปจะถูก replace ต้องทำ array เพื่อเก็บข้อมุล
    // ? ปัญหาคือเก็บได้แค่ครั้งเดียว ดังนั้นต้องทำให้ local storage เก็บ array

    let tasks;

    // * เรียกดู (แปลง string เป็น )
    if (localStorage.getItem("tasks") === null) {
        tasks = []; // set empty array
    } else {
        // เรียก array ขึ้นมาดู แต่ localStorage ไม่ใช่ array จะต้องใช้ jason.parse แปลงก่อน
        tasks = JSON.parse(localStorage.getItem("tasks"));
        // tasks.forEach(function(task) {
        //     console.log(task);
        // });
    }

    // push to task ให้เป็น array ก่อน
    tasks.push(task);

    // เก็บข้อมูลใน local storage โดยแปลง array เป็น string
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // จะสังเกตุว่า local storage เก็บค่าเป็น string

    alert("Task saved");

    // ป้องกัน behavier
    e.preventDefault();
});

// ดึงค่ามาแสดง จะต้องแปลงค่าจาก string เป็น array  (JSON.parse())
// และวนลูปผ่าน forEach
const taskspull = JSON.parse(localStorage.getItem("tasks"));

taskspull.forEach(function(task) {
    console.log(task);
});

/////////////////////////////////////////////////////
