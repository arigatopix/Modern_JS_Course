// * โครงสร้าง
// Storage controler : เก็บข้อมูลปัจจุบัน
// Item Controler : Local data เก็บ items และส่งให้ UI, APP 
// UI controller : input show hide  แสดงผล และรับค่าจาก UI 
// App : init, event listener
///////////////////////////////////////// 

// Storage Controller
const StorageCtrl = (function () {
  // Public methods
  return {
    storeItem: function (item) {
      let items;

      // check if any items in ls
      if (localStorage.getItem('items') === null) {
        items = [];
        // Push the new item
        items.push(item);

        // Set LS
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        // ถ้าใน ls ไม่ว่าง ให้ดึงออกมาก่อน
        items = JSON.parse(localStorage.getItem('items'));

        // Push new item
        items.push(item);

        // set to LS again
        localStorage.setItem('items', JSON.stringify(items));
      }
    },
    getItemFromStorage: function () {
      // ดึงข้อมูลจาก LS
      let items;

      if (localStorage.getItem('items') === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },
    updateItemStorage: function (updatedItem) {
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach(function (item, index) {
        if (updatedItem.id === item.id) {
          items.splice(index, 1, updatedItem); // ได้ array ของ index และลบไป 1 ตัว , สุดท้ายคือการ replace ด้วย updateItem
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    deleteItemFromStorage: function (id) {
      console.log(id);
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach(function (item, index) {
        if (id === item.id) {
          items.splice(index, 1);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    clearItemsFromStorage: function () {
      localStorage.removeItem('items');
    }
  }
})();

// Item Controller โครงสร้างของข้อมูล
const ItemCtrl = (function () {
  // Item Constructor (พวกใช้ this)
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State : ตั้งค่าของแต่ละ item ให้แสดงผลยังไง และหลังจากกด Add Meal แล้ว CurrentItem ต้องเป็น form เปล่า คล้ายๆ React แต่ใช้ vanilla JS 
  const data = {
    items: StorageCtrl.getItemFromStorage(),
    currentItem: null, // หลังจากที่ add meal แล้วเป็น form เปล่า
    totalCalories: 0
  }
  // อย่าลืมว่าเป็น PRIVATE function ถ้าจะเอาออกไปเป็น PUBLIC ใช้ return

  // * Public Methods ให้ APP กับ UI ใช้งาน
  return {
    logData: function () {
      // ข้างนอกเรียกใช้ logData เพื่อเอา data ใน PRIVATE ไปแสดง
      return data;
    },
    getItems: function () {
      // เอาแต่ละ item ไปแสดงผลข้างนอก สั่งให้แสดงผลตั้งแต่เริ่มต้น
      return data.items;
    },
    getItemById: function (id) {
      // เอาข้อมูล item ออกมาตามที่กดสั่ง edit App : itemUpdateSubmit
      let found = null;
      // loop through items
      data.items.forEach(function (item) {
        if (item.id === id) {
          found = item;
        }
      });
      // เอา item ที่เรียก id มาไปใช้ข้างนอก
      return found;
    },
    updateItem: function (name, calories) {
      // ก่อนเก็บเข้า items แปลงเป็น number ก่อนเพื่อความชัวร์
      calories = parseInt(calories);

      let found = null;

      // เอาข้อมูล item จาก data structure
      data.items.forEach(function (item) {
        // เก็บข้อมูลเข้า items เมื่อ id ตรงกับตอนที่ click edit
        if (item.id === data.currentItem.id) {
          // update เข้า Data structure
          item.name = name;
          item.calories = calories;
          // ตั้งค่าให้เอาไปใช้งานต่อได้
          found = item;
        }
      });
      return found;  // ให้ UI เอาไปใช้ต่อ
    },
    deleteItem: function (id) {
      // Get ids จาก data structure ลองใช้ map
      ids = data.items.map(function (item) {
        // ได้ทั้ง key และ value
        return item.id
      });

      // Get Index
      const index = ids.indexOf(id); // id คือค่าที่รับมา

      // เรียก object แล้วตัดออกตัวนึง ดูจากที่ส่งมา
      data.items.splice(index, 1);
    },
    clearAllItems: function () {
      data.items = [];
    },
    setCurrentItem: function (item) {
      // เก็บข้อมูลใน currentItem เพื่อให้ UI ไปแสดง
      data.currentItem = item;
    },
    getCurrentItem: function () {
      return data.currentItem;
    },
    addItem: function (name, calories) {
      let ID;
      // Create ID auto increment
      if (data.items.length > 0) {
        // คือจำนวนสมาชิกลำดับที่ 1 (index1 แต่มีสมาชิก 2 ตัว)
        ID = data.items[data.items.length - 1].id + 1; // สมาชิกตัวที่ 2 เป็นต้นไป id จะ +1 ในวงเล็บ [] คือลำดับ
      } else {
        ID = 0 // init item is item 0
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new item ส่งให้ object Item();
      newItem = new Item(ID, name, calories);

      // Add to item array เพิ่ม newItem เข้าไปใน data.items ที่เป็น array เดิม
      data.items.push(newItem); // เช็คใน ItemCtrl.logData();

      // Public เพื่อเอาไปแสดงใน UI
      return newItem;
    },
    getTotalCalories: function () {
      // คำนวณ calories และส่งไปหา App
      let total = 0;

      // Loop throgh items and add cals
      data.items.forEach(function (item) {
        total += item.calories;
      });

      // Set total cals in data structures (เพิ่ม DATA เข้าไปใน DATA เดิม)
      data.totalCalories = total;

      return data.totalCalories;
    }
  }
})(); // IFEs function run anyway
////////////

// UI Controller
const UICtrl = (function () {
  const UISelectors = {
    // มีไว้สำหรับเรียกแสดงผลใน UI แล้วใส่ชื่อ id จะได้ไม่ต้องมี document.querySelector หลายบรรทัด (ซ้ำซ้อน)
    itemList: '#item-list',
    listItems: '#item-list li', // ทำอย่างงี้ก็ได้
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.clear-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  };

  // * Public Methods
  return {
    // 3 รับมาจาก APP แล้วแสดงผล UI
    populateItemList: function (items) {
      let html = '';

      items.forEach(function (item) {
        // Appen to list item
        html += `
        <li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil-alt"></i>
        </a>
        </li>
        `;
        // ! WTF !!!!!!!!!!!
      });

      // Insert list item
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function () {
      return {
        // รับ value จาก UI (input name และ calories)
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    getSelectors: function () {
      // มีไว้เรียก id, class ของ UI จากข้างนอก (public)
      return UISelectors;
    },
    addListItem: function (item) {
      // Create li element
      const li = document.createElement('li');
      // Add Class
      li.className = 'collection-item';
      // Add id ที่ได้มาจาก ItemCtrl
      li.id = `item-${item.id}`;
      // Add HTML ใน li tag
      li.innerHTML = `
      <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
      <i class="edit-item fa fa-pencil-alt"></i>
      </a>
      `;
      // InsertItem to UI 
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
      // Show the list (เพราะเรา ซ่อนไว้ ถ้าไม่มี list item)
      document.querySelector(UISelectors.itemList).style.display = 'block';
    },
    addItemToForm: function () {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    hideList: function () {
      // กรณีที่ไม่มี list item เลย ให้ซ่อน <ul id="item-list"></ul>
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    removeItems: function () {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Node list to array
      listItems = Array.from(listItems);

      listItems.forEach(function (item) {
        // ลบทุก tag
        item.remove();
      });
    },
    showTotalCalories: function (totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    updateListItem: function (item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Turn Node list into array
      listItems = Array.from(listItems);

      listItems.forEach(function (listItem) {
        const itemID = listItem.getAttribute('id');

        if (itemID === `item-${item.id}`) {
          // อย่าลืม ===
          document.querySelector(`#${itemID}`).innerHTML =
            `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil-alt"></i>
          </a>`;
        }
      });
    },
    deleteListItem: function (id) {
      // เรียก id
      const itemID = `#item-${id}`;
      // เรียก tag element ของ id
      const item = document.querySelector(itemID);
      item.remove();
    },
    clearInput: function () {
      // ดึงข้อมูลจาก CurrentItem
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    clearEditState: function () {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState: function () {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    }
  }
})();

////////////

// App Controller : เป็นศูนย์รวม ดึงข้อมูล แล้วส่งให้ UI ทำต่อ
const App = (function (ItemCtrl, UICtrl, StorageCtrl) { // parameter เรียกใช้ Item, UICtrl ใน function App คล้ายๆ เรื่อง asyn await ของ Jonas
  // App มีไว้เพื่อสั่ง update, Get data ที่ ItemCtrl และสั่งแสดงผลที่ UICtrl

  // * Load event listeners เมื่อมี event ให้มาเรียกตรงนี้ จะต้องทำให้เป็น public function ด้วยจะได้เรียกใช้งานได้
  const loadEventListeners = function () {
    // get UI พวก class,id 
    const UISelectors = UICtrl.getSelectors();

    // Add item Event (ปุ่ม Add meal)
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    // Disable submit on enter เพราะว่าตอนเรากด edit แล้วกด enter ข้อมูลจะถูก add list ซึ่งจริงๆ ควรจะ edit ไม่ใช่ add
    document.addEventListener('keypress', function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        // เลข 13 คือ enter 
        // บาง browser ใช้ e.which
        e.preventDefault();
        return false;
      }
    });

    // Edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

    // Update item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

    // Delete item event
    document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

    // Back button event
    document.querySelector(UISelectors.backBtn).addEventListener('click', function (e) {
      UICtrl.clearEditState();
      // มันจะ reflesh หน้าจอ ถ้าไม่ใส่ e.preventDefault() หรือจะใส่ type="button" ที่ button ก็ได้
      e.preventDefault();
    });

    // Clear All item event
    document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemClick);


  }

  // Add item AddSubmit function
  const itemAddSubmit = function (e) {
    // Get form input from UI Controller (รับค่า value จาก form)
    const input = UICtrl.getItemInput();

    // Check for name and calories input
    if (input.name !== '' && input.calories !== '') {
      // Add item to ItemCtrl
      const newItem = ItemCtrl.addItem(input.name, input.calories);

      // Add item to UI list
      UICtrl.addListItem(newItem);

      // Add to Local Storage
      StorageCtrl.storeItem(newItem);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Clear fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  }

  // Click Edit item
  const itemEditClick = function (e) {
    // กำหนดให้มันกดตรงปุ่ม edit จริงๆ และส่ง id ไปเพื่อ edit ค่า
    if (e.target.classList.contains('edit-item')) {
      // Get list item id (eg : item-0, item-1)
      const listId = e.target.parentNode.parentNode.id; // เอา id ของ li

      // Break into an array (ใช้ split เพื่อเอา id อย่างเดียว)
      const listIdArr = listId.split('-');

      // Get the actual id
      const id = parseInt(listIdArr[1]);

      // Get item to edit (รับค่าจาก ItemCtrl โดยรับเฉพาะค่า id ที่ get มา)
      const itemToEdit = ItemCtrl.getItemById(id);

      // Set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      // Add item to form
      UICtrl.addItemToForm(); // ไม่ต้องมีค่าอะไรเพราะ currentItem มีข้อมูลอยู่แล้ว
    }
    e.preventDefault();
  }

  // Update item submit
  const itemUpdateSubmit = function (e) {
    const input = UICtrl.getItemInput();

    // Update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

    // Update UI
    UICtrl.updateListItem(updatedItem);

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);

    // Update local Storage 
    StorageCtrl.updateItemStorage(updatedItem);

    UICtrl.clearEditState();

    e.preventDefault();
  }

  // Delete button event
  const itemDeleteSubmit = function (e) {
    // Get current item
    const currentItem = ItemCtrl.getCurrentItem();

    // Delete from local storage
    StorageCtrl.deleteItemFromStorage(currentItem.id);

    // Delete from UI
    UICtrl.deleteListItem(currentItem.id);

    // Delete from data structure
    ItemCtrl.deleteItem(currentItem.id);

    // ! อย่าลืมคิด cal ใหม่
    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);

    if (ItemCtrl.getCurrentItem.length === 0) {
      // กรณีไม่มีสมาชิกใน ul
      UICtrl.hideList();
    }

    UICtrl.clearEditState();

    e.preventDefault();
  }

  // Clear items event
  const clearAllItemClick = function (e) {
    // Delete all item from data structure
    ItemCtrl.clearAllItems();

    // Remove item from UI
    UICtrl.removeItems();

    // Clear from LS
    StorageCtrl.clearItemsFromStorage();

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);

    UICtrl.clearEditState();

    // hide ul tag line
    UICtrl.hideList();

    e.preventDefault();
  }

  // * PRIVATE Methods
  return {
    // Init app ตอนเริ่มต้นใช้งานครั้งแรก ให้ข้างนอกเรียกใช้งานได้
    init: function () {
      // Clear edit stae / set initial set
      UICtrl.clearEditState();

      // 1. Fetch items form Data structure ดึง Item เพื่อแสดงผลต่อที่ UI Controller
      const items = ItemCtrl.getItems();

      // Check if any items
      if (items.length === 0) {
        // กรณีไม่มีสมาชิกใน ul
        UICtrl.hideList();
      } else {
        // 2. Populate list each items : แสดงผล list item โดยใช้ UI Controller
        UICtrl.populateItemList(items);
      }

      // Get total calories for init
      const totalCalories = ItemCtrl.getTotalCalories();
      // ส่งไปแสดงผลที่ UI
      UICtrl.showTotalCalories(totalCalories);

      // Load Event listeners
      loadEventListeners();
    }
  }
})(ItemCtrl, UICtrl, StorageCtrl); // คือการเรียก function โดยมี parameter ส่งไปให้ function App

App.init();