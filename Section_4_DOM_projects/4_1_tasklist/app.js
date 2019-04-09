// *** Define UI Variables ***

// เชคว่า submit มารึยัง
const form = document.querySelector('#task-form');
// เพิ่ม list item
const taskList = document.querySelector('ul.collection');
// ลบ list item
const clearBtn = document.querySelector('.clear-tasks');
// filter หาข้อความ
const filter = document.querySelector('#filter');
// รับค่าข้อความ input
const taskInput = document.querySelector('#task');

///////////////

// *** Load all event listeners : ทำ function ให้มัน load event ไว้เลย ***
loadEventListener();

function loadEventListener() {
    // Add task event ถ้ามีกดปุ่ม submit แล้ว..
    form.addEventListener('submit',addTask);

    // Remove task event
    taskList.addEventListener('click',removeTask);

    // Clear task event
    clearBtn.addEventListener('click',clearTasks);

    // Filter task event ค้นหาตัวหนังสือ
    filter.addEventListener('keyup',filterTasks);

    // จะแสดง list item จาก local storage
    // * DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks);

}
///////////////

// Add Task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    } else {
        // *** Create li element ***
        const li = document.createElement('li');
        // Add class
        li.className =  'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));
        // *** Create link element and icon ***
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content';
        // add icon in link element
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // append link to li
        li.appendChild(link);
    
        // *** Append li to ul
        taskList.appendChild(li);
    
        // *** รับมา แล้วเก็บ ****
        // ! Store in Local Storage (เก็บ JSON.stringify() | ดึงข้อมูล JSON.parse()) ผิดเพราะรับข้อมูลผิดที่
        storeTaskInLocalStorage(taskInput.value);
    
        // *** Clear input หลังจาก submit แล้วให้ข้อความหายไปจากกล่อง
        taskInput.value ='';
    }
    
    // ** หยุด behavior ของ submit
    e.preventDefault();
}
///////////////

// เก็บ Store Task ลงใน Local storage | * ต้องรับค่ามาจาก addTask *
function storeTaskInLocalStorage(task) {

    // 1 กำหนด key ให้ local storage (tasks)
    let tasks;

    if (localStorage.getItem('tasks') === null){
        // ถ้าไม่มีข้อมูลให้สร้าง array เปล่า
        tasks = [];
    } else {
        // ถ้ามีข้อมูล ให้ดึงข้อมูลออกมา (ต้องแปลง string เป็น array)
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // 2 ถ้ามี task เข้ามาใหม่ ให้เก็บข้อมูลลง array ที่มี key ชื่อ tasks
    tasks.push(task);

    // 3 array แปลงเป็น string เพื่อเก็บใน local storage
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

///////////////

// แสดง Get Tasks from local storage | ดึงข้อมูลจาก local storage แสดงใน list item
function getTasks() {
    
    let tasks;

    // เชคว่า key tasks มีข้อมูลมั้ย (เหมือนกับตอน store to LS)
    if (localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // เอาข้อมูลจาก Array ไปแสดงในหน้า html (เหมือนกับตอนที่ addTask)
    // วน loop ผ่าน task แล้วสร้าง list item ขึ้นมา

    tasks.forEach(function(task) {
        // *** Create li element ***
        const li = document.createElement('li');
        // Add class
        li.className =  'collection-item';
        // Create text node and append to li
        // ** เปลี่ยนนิดนึง รับข้อมูลผ่าน task ที่เป็น array
        li.appendChild(document.createTextNode(task));
        // *** Create link element and icon ***
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content';
        // add icon in link element
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // append link to li
        li.appendChild(link);

        // *** Append li to ul
        taskList.appendChild(li);
    })
}
///////////////

// Remove Task จะต้องระบุถึง link element แล้วให้ลบ list item ใช้ event delegation
function removeTask(e) {

    // กำหนดให้กดกดโดน icon element เท่านั้น ถึงจะลบ (parentElement มี class delete-item คือ link element)
    if (e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are You Sure?')) {
            // ลบ list item เป็น parent ของ parent icon element 
            e.target.parentElement.parentElement.remove();

            // Remove from Local storage สร้าง function เลย
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}
///////////////

// Remove from Local Storage | จะ run function นี้เมื่อกด icon 
function removeTaskFromLocalStorage(taskItem) {
    // รับ taskItem มาจาก list item

    // เชคว่ามี tasks ใน LS มั้ย
    let tasks;

    if (localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // ให้วน loop tasks แล้วตัด value ของ array ออก
    // array จะมี value แค่ 1 เพราะว่าเรากดปุ่ม icon เฉพาะเจาะจงตาม function removeTask
    tasks.forEach(function(task, index) {
        // เอาเฉพาะ text ใน list item มา
        if(taskItem.textContent == task) {
            // ใช้คำสั่ง splice ตัด value ออกจาก array | เช่น tasks = [a]; จะตัด a ออก ใช้ tasks.splice(0,1); จะเหลือ tasks = [];
            tasks.splice(index,1);
        } 
    });

    // ส่งข้อมูลที่ตัดออกไปแล้ว .. กลับไปที่ Local Storage
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

///////////////
// Clear tasks (มี 2 วิธี คือกำหนด taskList.innerHTML = '' กับใช้ while loop ลบ list item)
function clearTasks() {
    // วิธีที่ 1
    // taskList.innerHTML = '';

    // วิธีที่ 2 เร็วกว่าอันบน ยังมี firstChild อยู่ ให้ลบ child ของ ul
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);

        // ลบ list item ออกจาก local storage ด้วย
        // localStorage.clear();
        clearTasksFromLocalStorage();
    }
    // https://jsperf.com/innerhtml-vs-removechild/47
}
///////////////

// Clear tasks from Local Storage
function clearTasksFromLocalStorage() {
    localStorage.clear();
}
///////////////
// Filter Task
function filterTasks(e) {
    // ดูการรับค่าจาก keyboard แปลงให้เป็นตัวอักษรเล็กทั้งหมด กำจัด case sensitive
    const text = e.target.value.toLowerCase();

    // ให้แสดง list item ทั้งหมดที่มีใน html ผ่าน array  /  ดู array โดยใช้ forEach
    document.querySelectorAll('.collection-item').forEach(function(task) {
        
        // 1 กำหนดให้ list item เป็นข้อความ
        const item = task.firstChild.textContent;
        
        // 2 ตรวจสอบโดยใช้ indexOf() เป็น function ของ array หาตำแหน่งของตัวอักษร ถ้าเจอตรงกันก็จะตอบ position แต่ถ้าไม่ตรง จะ return ค่า -1 
        // กำหนดให้ item เป็นตัวพิมพ์เล้กด้วย
        if (item.toLowerCase().indexOf(text) != -1) {
            // ถ้าหาเจอ แสดง list item 
            task.style.display = 'block';
        } else {
            // หาไม่เจอให้เป็น none
            task.style.display = 'none';
        }
    });
}
///////////////