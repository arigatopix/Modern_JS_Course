/****
 * NOTE MAPS : new object literal ต่างจากปกติ
 *     - key-value pairs - can use ANY type as a key or value
 *     - MAPS จะใช้ key รุปแบบไหนก็ได้ string, number, object, function
 *     - primitive หรือ object ปกติจะใช้ key or value
 */

const map1 = new Map();

// Set Keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

// * Set 'map' value by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// * Get values by key
// console.log(map1.get(key1), map1.get(key2),map1.get(key3));

// * Count value (Size in this map)
// console.log(map1.size); // มี key or value 3 ตัว
////////////////////////////////////////////////

// * ITERATE MAPS
// Loop using for ... of to get keys and values
// เอาทั้ง key, value
/* 
for(let [key, value] of map1) {
  // ใช้เหมือน Deconstructure
  console.log(`${key} : ${value}`);
}
*/
////////////////

// Iterate keys only (เอา key ทั้งหมดมาดู .keys())
/* 
for(let key of map1.keys()) {
  // ใช้เหมือน Deconstructure
  console.log(`${key}`);
}
*/
////////////////
// Iterate values only (มี s )
/* 
for(let value of map1.values()) {
  // ใช้เหมือน Deconstructure
  console.log(`${value}`);
}
*/

////////////////
//  Loop with forEach (จำ ว่า forEach ต้องวนผ่าน function)
/* 
map1.forEach(function(key, valye) {
  console.log(`${key} : ${value}`);
});
 */
////////////////
// * CONVERSE TO ARRAYS
// Create an array of the key value pairs (สร้าง array ที่มีสมาชิกเป็น key กับ value)
/* 
const keyValArr = Array.from(map1);
// Array.from คือการสร้าง array คล้ายๆ ดึง JSON มาแล้วสร้าง อยู่บทแรกๆ
console.log(keyValArr);
*/
////////////////
// Create an array of values ได้ array เฉพาะ value ของ map
/* 
const ValArr = Array.from(map1.values());
console.log(ValArr);
 */
////////////////
// Create an array of keys ได้ array เฉพาะ keys ของ map

const keysValArr = Array.from(map1.keys());
console.log(keysValArr);

////////////////
