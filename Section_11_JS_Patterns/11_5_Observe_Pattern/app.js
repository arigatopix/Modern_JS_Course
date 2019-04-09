/********************************************
 *!          Observer Pattern *
**********************************************/
// จะลอง subscribe / unsupscribe event/module
// Observer = ผู้สังเกตุการณ์
// ใช้กับพวก notify DOM ดูการ update ของ element
// angularJS ใช้ pattern นี้ผ่าน event management within the scope
// ลองใช้ ES5 (Prototype) และ ES6
/////////////////////////////////

// Project Subscribe / Unsupscribe 
// ถ้ากดปุ่ม SUB/UNSUB จะมี noti บอก
// ปุ่ม Fire จะแสดง notification เฉพาะตอนที่ยัง Subscribe อยู่
/////////////////////////////////

function EventObserver() {
  // Array เก็บ event ทั้งหลาย สร้าง function เพิ่มเมื่อเกิด event
  this.observers = [];
}

// Prototype function
EventObserver.prototype = {
  // ปกติจะสร้าง function EventObserver.prototype.name มันคือความหมายเดียวกันกับสร้าง object แหละ
  subscribe : function(fn) {
    // fn จะรับค่าจาก function ที่กดแล้วให้แสดงผลเป็นเวลา

    // ให้ observers รู้ว่าเป็น function อะไร เพิ่มใน array
    this.observers.push(fn);

    // ให้แสดง notification ตอนกดปุ่ม
    console.log(`You are now subscribe to ${fn.name}`);
  },

  unsubscribe : function(fn) {
    this.observers = this.observers.filter(function(item) {
      return item !== fn;
      // Filter คือการตัด Array ออก ตามที่ callback function สั่ง
      // fn = [1,2,3,4]; item = [2,3] returns  item ==! fn //  จะได้ [1,4]
      // จากตัวอย่าง จะ returns Array (สมาชิกของ item) ที่ !== fn
      // Filter out from the list whatever matches the callback function
      // If there is no match, callback gets to stay on the list.
      // The filter returns a new list and reassigns the list of observers
    });
    console.log(`You are now unsubscribe from ${fn.name}`);
  },
  // อย่าลืม comma เพื่อสร้าง object

  fire: function() {
    this.observers.forEach(function(item){
      // loop Array ที่มีเหตุการณ์อยู่ เมื่อคลิกจะได้ subscribe.call(); เรียกใช้งาน function ของ object
      // ถ้าคลิก unsubscript ไปแล้ว Array observers จะไม่มีอะไร ก็เลย call ไม่เหน
      item.call();
      // call(); เป็น method เรียก function object
    });
  }
}

/////////////////////////////////

// สร้าง var รับเหตุการณ์
const click = new EventObserver();

/////////////////////////////////

// * Event Listeners
// Subscribe Button
document.querySelector('.sub-ms').addEventListener('click',function(){
  // รับเหตุการณ์ใส่ใน Array ถ้ากด Subscribe 
  //  บอกเวลาที่คลิก getCurrentMilliseconds ผ่าน (fn)
  click.subscribe(getCurrentMilliseconds);
});

// Unsubscribe Button
document.querySelector('.unsub-ms').addEventListener('click',function(){
  click.unsubscribe(getCurrentMilliseconds);
  // ใส่ array unsubscript ใน filter จะตัด function เวลาออก
});

// Subscribe Seconds Button
document.querySelector('.sub-s').addEventListener('click',function(){
  click.subscribe(getCurrentSeconds);
});

// Unsubscribe Seconds Button
document.querySelector('.unsub-s').addEventListener('click',function(){
  click.unsubscribe(getCurrentSeconds);
});

// Fire Button
  document.querySelector('.fire').addEventListener('click',function(){
    // จะมีผลต่อเมื่อ SUBSCRIBE อยู่เท่านั้น
    click.fire();
  });

/////////////////////////////////

// Click Handler
// function แสดงเวลา
const getCurrentMilliseconds = function() {
  console.log(`Current Milliseconds : ${new Date().getMilliseconds()}`);
}

// function แสดงเวลา Second
const getCurrentSeconds = function() {
  console.log(`Current Sconds : ${new Date().getSeconds()}`);
}