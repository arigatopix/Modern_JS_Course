/****
 * SETS 
 *    - Store unique values of any type
 *    - ไม่มี key, value pairs
 */

// * Create Set
const set1 = new Set();

// * Add values to set
set1.add(100);
set1.add('A string');
set1.add({name : 'John'});
set1.add(true);
set1.add(100); //* เพิ่มซ้ำเข้าไป สมาชิก Set ไม่เพิ่ม ข้อดีของ Set คือเก็บ unique value

// console.log(set1);

// * Create Set แบบที่ 2
/* 
const set2 = new Set([1, true, 'String'])
console.log(set2);
 */
/////////

// * Get count (size ของ set)
/* 
console.log(set1.size);
 */
/////////
// * Check for values (ตอบเป็น boolean)
/* 
console.log(set1.has(100)); // true
console.log(set1.has(50 + 50)); // true
// ลอง object จะเป็น false เพราะว่าใน set ไม่ใช่ primitive value ที่เก็บใน memory ตำแหน่งเดียวกัน
// คล้ายๆ Section แรกๆ
console.log(set1.has({name : 'John'})); // false
console.log(({name : 'John'} === {name : 'John'})) // false เพราะ memory อยู่คนละตำแหน่ง ไม่เหมือน primitive (number,string,boolean)
// console.log('john' === 'john'); // true เพราะเป้น primitive
 */
/////////

// * Delete from set
/* 
set1.delete(100);
console.log(set1);
 */
////////////////////////////

// * ITERATIVE THROUGH SETS
// For.. of
/* 
for (let item of set1) {
  console.log(item);
}
*/
/////////
// Get values, keys, entries (ได้ object ไม่ค่อยได้ใช้) คือเอา value ใน set ออกมา
/* 
for (let item of set1.values()) {
  console.log(item);
}
 */
/////////
// ForEach Loop with arrow function
/* 
set1.forEach((value) => {
  console.log(value);
});
 */
////////////////////////////

// * CONVERSE SET TO ARRAY
/* 
const setArr = Array.from(set1);
console.log(setArr);
 */
/////////

