class UI {
  // ไม่ต้องมีคำว่า function
  addTask(task){
    // ! ต้องรับค่าจาก event มาเป็น text แล้ว
    const taskList = document.querySelector('.collection');
    // *** Create li element ***
    const li = document.createElement('li');
    // Add class
    li.className =  'collection-item';
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
  }

  removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
      if(confirm('Are You Sure?')) {
          e.target.parentElement.parentElement.remove();

          // ! เรียก function Static มาใช้ อย่าลืมพิมพ์ชื่อ class
          Store.removeTaskFromLocalStorage(e.target.parentElement.parentElement);

          const ui = new UI;
          ui.showAlert('Removed','success');
      }
    }
  }

  filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        // กำหนดให้ item เป็นตัวพิมพ์เล้กด้วย
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
      });
  }

  clearTasks() {
    if (confirm('Are you sure?')){
      const taskList = document.querySelector('ul.collection');
      while(taskList.firstChild) {
          taskList.removeChild(taskList.firstChild);
      }
  
      Store.clearTasksFromLocalStorage();
    }
    const ui = new UI;
    ui.showAlert('Clear Task','success');
  }

  showAlert(msg,className) {
    // ต้องมีข้อความ กับ className ของ div
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));
    
    // Insert Before เลือก parent กับ  child อันบนสุด
    // ! จดจำ!! ใช้ parentElement หลังจาก querySelector
    const row = document.querySelector('#task-form').parentElement;
    const form = document.querySelector('#task-form');

    row.insertBefore(div, form);

    setTimeout(function(){
      document.querySelector('.alert').remove();
    },2000)
  }

}
/////////////////////////////////////////////////

class Store {
  static getTaskFromLocalStorage() {
    let tasks;

    if (localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
    // ! อย่าลืม return เพื่อเอาไปใช้ต่อนอก function ***
  }

  // เก็บข้อมูลลงใน LS
  static storeTaskInLocalStorage(task) {

    const tasks = Store.getTaskFromLocalStorage();

    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  //! Remove from LS
  static removeTaskFromLocalStorage(taskItem) {
    const tasks = Store.getTaskFromLocalStorage();

    tasks.forEach(function(task, index){
      // ! ต้องเอาตัวหนังสือมาเทียบ
      if(taskItem.textContent == task) {
        tasks.splice(index,1);
      }
    });
    // ! ชอบลืมส่งกลับ
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  // Clear LS
  static clearTasksFromLocalStorage() {
    localStorage.clear();
  }

  // Display ข้อมูลใน LS หลังจาก reload page
  static displayTasksFromLocalStorage() {
    const tasks = Store.getTaskFromLocalStorage();

    tasks.forEach(function(task) {
      const ui = new UI();
      ui.addTask(task);
    });
  }
}

/////////////////////////////////////////////////

class Event {
  static loadEventListener() {

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

    const ui = new UI();

    // Add task event ถ้ามีกดปุ่ม submit แล้ว..
    form.addEventListener('submit',function(e){
      
      if(taskInput.value === ''){
        // alert('Add a task');
        // เพิ่ม function alert (msg,classname)
        ui.showAlert('Please fill in all fields', 'error');

      } else {
        ui.addTask(taskInput.value);

        ui.showAlert('Task Added','success');

        Store.storeTaskInLocalStorage(taskInput.value);

        taskInput.value ='';
      }
  
      e.preventDefault();
    });

    // Remove task event
    taskList.addEventListener('click',ui.removeTask);

    // Clear task event
    clearBtn.addEventListener('click',ui.clearTasks);

    // Filter task event ค้นหาตัวหนังสือ
    filter.addEventListener('keyup',ui.filterTasks);

    // * DOM Load event
    document.addEventListener('DOMContentLoaded',Store.displayTasksFromLocalStorage);
  }
}

/////////////////////////////////////////////////

// *** Load all event listeners : ทำ function ให้มัน load event ไว้เลย ***

Event.loadEventListener();