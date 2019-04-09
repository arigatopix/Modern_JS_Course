/****
 ** NOTE : ES6 = ES2015 new features
 *  - Module คือ export ไฟล์แยกออกไป แบ่ง code ไปหลายๆ ไฟล์เพื่อรับผิดชอบหน้าที่แต่ละอย่าง เหมือนโปรแกรมอื่นๆ
 *  - import เข้าไปในไฟล์ๆ นึงได้ แต่ไม่รองรับทุก browser ต้องใช้ babel ร่วมกับ module loader เช่น webpack
* *************/

// * Basic structure 
// IFEs (immediatly function expression) คือประกาศ function แล้วเรียกใช้เลย สังเกตุ (); ท้าย function
/* 
(function() {
  // Declare 'private' vars and functions ข้างนอก module ไม่สามารถใช้ variable ได้

  return {
    // Declare 'PUBLIC' var and function ในกล่อง return
  }
})();
 */
///////////////////////////////////

// * STANDARD MODULE Pattern

const UICtrl = (function() {
  // Private function

  // จะเปลี่ยน h1 ใน html
  let text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');

    element.textContent = text;
    // ใช้ var text ได้เพราะว่า text ถือว่าเป็น global scope ของ function นี้

  }
  return {
    // Public function return ของ UICtrl เพื่อให้ข้างนอกมาใช้ function นี้ได้
    callChangeText : function() {
    changeText();
    console.log(text);
    }
  }
})();

// call public function ใช้ใน console ของ browser ได้ด้วย
UICtrl.callChangeText();

// Call private function line 27 (changeText();) ทำไม่ได้
// UICtrl.changeText(); // Type Error NOT Function


 ///////////////////////////////////

// * Revealing MODULE Pattern (Reveal = เปิดเผย) ทำโดยใช้ MAPS

const ItemCtrl = (function() {
  let data = []; // _data : คือ บอกว่ามันเป็น private variable ตั้งชื่อให้บอกชัดเจน เดี๋ยวได้ใช้

  function add(item) {
    // ประกาศที่ private แล้วเรียกที่ return เพื่อให้ข้างนอกเรียกใช้งานได้
    data.push(item);
    console.log('Item Added...')
  }

  function get(id) {
    return data.find(item => {
      // ค้นหา object ใน data โดยรับ item มา
      return item.id === id;
      // ต้องเป็น key ชื่อ id ถึงจะหาเจอ
    });
  }

  return {
    // Revealing function "public function"
    add : add,
    get : get
  }
})();

// เรียกใช้ Public function
// Add object ที่มี key ชื่อ id
ItemCtrl.add({id : 3});
ItemCtrl.add({id : 2, name : 'John'});
console.log(ItemCtrl.get(2));

// Revealing Module จะดูสะอาดตากว่า ประกาศใน PRIVATE แล้ว บอกว่าเป็น PUBLIC ตรง return