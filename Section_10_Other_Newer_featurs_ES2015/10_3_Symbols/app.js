/* 
 * Symbols * ...
  - มีไว้เพื่อ object properties identifies คือมี property ไว้เชค variable ต่างๆ
  - เป็น Properties ไม่ใช่ key ที่แท้จริงของ object
      NOTE : OBJECT ประกอบด้วย { key : value }
  - จะ stringify เป็น JSON ไม่ได้เพราะมันไม่ใช่ key
  - เป็น Primative ไม่มี type ที่เป็น object ใช้ === สามอันไม่ได้ เพราะ === จะเช็ค value และ type
 */

// * Create Symbol();
const sym1 = Symbol(); // ไม่ใช่ new Symbol(); เป็น primitive type เหมือนกับ number string
const sym2 = Symbol('sym2');

// console.log(typeof sym2); // symbol เพราะ เป็น primitive type

// * Test type
// console.log(Symbol('12') === Symbol('12')); // false เพราะว่า symbol ไม่มีทางเหมือนกัน

// console.log(`Hello ${sym1}`); // TypeError เพราะ ไม่สามารถ coverse symbol to string ต้องใส่ method ให้มัน

// * Converse Symbol to string
// console.log(`Hello ${String(sym1)}`);
// console.log(`Hello ${sym1.toString()}`);
/////////////////////////////////////////////

// * Unique Object Keys

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

// ทำ symbol ให้เป็น property ของ myObj
myObj[KEY1] = 'Prop1'; // Property 1 เป็น property ไม่สามารถแปลงเป็น JSON ได้
myObj[KEY2] = 'Prop2';

// สร้าง key ให้กับ object (แปลงเป็น JSON ได้)
myObj.KEY3 = 'Prop3';
myObj.KEY4 = 'Prop4';

// console.log(myObj);

// // Symbol are not enumerable in for ... in ลอง loop ใน object จะเห็นแค่ key value ของ myObj
// for (let i in myObj) {
//   // ${i} คือ key : ${myObj[i]} คือ value
//   console.log(`${i} : ${myObj[i]}`);
// }

// NOTE enumerable property is one that can be included in and visited during [ for..in loops ]

/////////////////////////////////////////////

// * Symbol are ignored by JSON.stringify
// Normal
console.log(JSON.stringify({key : 'prop'}));
// with Symbol
console.log(JSON.stringify({[Symbol('sym1')] : 'prop'}));
