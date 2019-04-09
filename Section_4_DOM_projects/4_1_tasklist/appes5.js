/* *****
******* ES5 *****/

// use function สร้าง object constructor
// prototype สร้าง function
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
// UI
function UI() {

}

UI.prototype.addTask = function (task) {
  const taskList = document.querySelector('.collection');
  // *** Create li element ***
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
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
};

UI.prototype.removeTask = function (e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();

      Store.prototype.removeTaskFromLocalStorage(e.target.parentElement.parentElement);

      const ui = new UI;
      ui.showAlert('Removed', 'success');
    }
  }
};

UI.prototype.filterTasks = function (e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    // กำหนดให้ item เป็นตัวพิมพ์เล้กด้วย
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
};

UI.prototype.clearTasks = function () {
  if (confirm('Are you sure?')) {
    const taskList = document.querySelector('ul.collection');
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }

    Store.prototype.clearTasksFromLocalStorage();

    const ui = new UI;
    ui.showAlert('Clear Task', 'success');
  }
};


UI.prototype.showAlert = function (msg, className) {
  // ต้องมีข้อความ กับ className ของ div
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(msg));

  // Insert Before เลือก parent กับ  child อันบนสุด
  // ! จดจำ!! ใช้ parentElement หลังจาก querySelector
  const row = document.querySelector('#task-form').parentElement;
  const form = document.querySelector('#task-form');

  row.insertBefore(div, form);

  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 2000)
};

// -----------------------------------------
// Event listener
function LoadEvent() {

}

LoadEvent.prototype.loadEventListener = function () {

  const form = document.querySelector('#task-form');
  const taskList = document.querySelector('ul.collection');
  const clearBtn = document.querySelector('.clear-tasks');
  const filter = document.querySelector('#filter');
  const taskInput = document.querySelector('#task');

  const ui = new UI;

  // Add task event ถ้ามีกดปุ่ม submit แล้ว..
  form.addEventListener('submit', function (e) {

    if (taskInput.value === '') {
      ui.showAlert('Please fill in all fields', 'error');
      // console.log('null');

    } else {
      ui.addTask(taskInput.value);

      ui.showAlert('Task Added', 'success');

      Store.prototype.storeTaskInLocalStorage(taskInput.value);

      taskInput.value = '';
    }

    e.preventDefault();
  });

  // Remove task event
  taskList.addEventListener('click', ui.removeTask);

  // Clear task event
  clearBtn.addEventListener('click', ui.clearTasks);

  // Filter task event ค้นหาตัวหนังสือ
  filter.addEventListener('keyup', ui.filterTasks);

  // * DOM Load event
  document.addEventListener('DOMContentLoaded', Store.prototype.displayTasksFromLocalStorage);

};

// -----------------------------------------
// Local Storage

function Store() {

}

Store.prototype.getTaskFromLocalStorage = function () {

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  return tasks;

};

Store.prototype.storeTaskInLocalStorage = function (task) {

  const tasks = Store.prototype.getTaskFromLocalStorage();

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
};

Store.prototype.removeTaskFromLocalStorage = function (taskItem) {

  const tasks = Store.prototype.getTaskFromLocalStorage();

  tasks.forEach(function (task, index) {
    if (taskItem.textContent == task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
};

Store.prototype.clearTasksFromLocalStorage = function () {
  localStorage.clear();
};

Store.prototype.displayTasksFromLocalStorage = function () {

  const tasks = Store.prototype.getTaskFromLocalStorage();

  tasks.forEach(function (task) {
    const ui = new UI();
    ui.addTask(task);
  });
};
// -----------------------------------------

// Load Event listener
LoadEvent.prototype.loadEventListener();