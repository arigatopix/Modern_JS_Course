//! Base On ES5
/*********************************************************************
 *!       Built in Constructor
 * 
 *  เช่น new Date() ก็จะได้ใช้ แต่บางตัวก็ไม่ควรใช้
 * เพราะเพิ่มความงง และ type แต่ละอย่างมันแตกต่างกัน
 * ! ไม่ครวรใช้ string / number / boolean
 *********************************************************************/
//* **** String ****
const name1 = 'Teeruch';
const name2 = new String('Teeruch'); // object เป็น inherit จาก String.prototype

/* 
console.log(name1); 
console.log(name2); // เป็น Object string 
name2.foo = 'bar'; // สามารถเพิ่ม key,value ได้
console.log(name2);
 */
//----------------------------------------

// Type of difference name1 and name2
/* 
console.log(typeof name1);
console.log(typeof name2);
 */
//----------------------------------------

// Check type and value จะเห็นว่า name1 กับ name2 ต่างกัน
/* 
if (name2 === 'Teeruch') {
  console.log('Yes');
} else {
  console.log('No');
}
//?  === คือการเช็คค่าและ type 'Yes' แค่ name1 , == เชคแค่ค่า name1 กับ name2 จะ 'Yes'
 */
//----------------------------------------

// **** Number ****
/* 
const num1 = 5;
const num2 = new Number(5);
console.log(typeof num2); // Object not Number
*/
//----------------------------------------

// **** Boolean ****
/* 
const bool1 = true;
const bool2 = new Boolean(true);
console.log(typeof bool2); // object not boolean
 */
//----------------------------------------

// **** Function ****
/* 
// * TYPE 1
const getSum1 = function(x,y) {
  return x + y;
}
console.log(getSum1(1,3));

// * TYPE 2
// ใช้ตัวใหญ่ Function('agr1','agr2','body')
const getSum2 = new Function('x','y','return x + y');
console.log(getSum2(1,5));

console.log(typeof getSum1); //function
console.log(typeof getSum2); //function
 */
//----------------------------------------

// **** Object ****
/* 
// TYPE 1
const john1 = {name : 'john'};
// TYPE 2 เหมือนกัน เพราะปกติเป็น object อยุ่แล้ว
const john2 = new Object({name : 'john'});
console.log(typeof john2); // object
 */
//----------------------------------------

// **** Array ****
/* 
// TYPE 1
const arr1 = [1,2,3,4];
// TYPE 2 เหมือนกัน เพราะปกติเป็น object อยุ่แล้ว
const arr2 = new Array(1,2,3,4);
console.log(typeof arr2); // object
 */
//----------------------------------------

// **** Regular Expression ****
// w = word character

// TYPE 1
const re1 = /\w+/;

// TYPE 2 เหมือนกัน เพราะปกติเป็น object อยุ่แล้ว
const re2 = new RegExp('\w+');

console.log(re1); // /\w+/
console.log(re2); // /w+/ จะต่างกันนิดนึง ไม่มี \ จริงๆ เราต้องใช้
//----------------------------------------

// สรุป บางอย่างใช้แบบ new Object / new Array จะทำให้ช้า และ confuse 

//--------------------------------------