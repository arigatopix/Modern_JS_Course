//* Normal
/* 
const sayHello = function() {
  console.log('Hello');
}
 */
/////////////

//  * Arrow แทนคำว่า function
/* 
const sayHello = () => {
  console.log('Hello');
}
 */
/////////////

// * One line function dose not need braces
// const sayHello = () => console.log('Hello');
/////////////

//* One line Returns
// const sayHello = () => 'Hello';
// SAME ABOVE
// const sayHello = function() {
//   return 'Hello';
// }  
/////////////

//* Return OBJECT Literal ใส่วงเล็บให้มัน
// const sayHello = () => ({ msg : 'Hello'});
/////////////

//* Function single parameter
// const sayHello = name => console.log(`Hello ${name}`);
/////////////

// * Multi param ต้องใส่วงเล็บ
// const sayHello = (firstName,lastName) => console.log(`Hello ${firstName} ${lastName}`);
/////////////

// * Arrow function for Callback
const users = ['BAS','AIIB','TEERUCH'];


/* 
const nameLengths = users.map(function(name) {
  // map method ต้องมี callback function ทำงานผ่าน array 
  return name.length;
})
 */

// Shortest โดยใช้ arrow function
const nameLengths = users.map(name => name.length);
// OUTPUT
console.log(nameLengths);
/////////////

// OUTPUT
