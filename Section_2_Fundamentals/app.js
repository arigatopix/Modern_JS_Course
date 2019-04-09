/**************************************
 *!      Using The Console
 *************************************/
/* 
// Log to console
console.log("Hello World");
// String show black
console.log(144);
// Number show blue

// Variable
var hello = "Hello JavaScript";
console.log(hello);

// Array
console.log([1, 2, 3, 4]);
// Object
console.log({ a: 1, b: 2 });

// table in object
console.table({ a: 1, b: 2 });

//  * Error / Warning

console.error("This some error");
// Show Red
console.warn("This is warning");
// Show yellow warning

console.clear();
// clear console

// time how long code trig
console.time("Hello");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.timeEnd("Hello");
// ตัวแรก กับตัวสุดท้ายต้องเหมือนกัน จะได้จับเวลาตัวแรกเป็นตัวตั้งต้น
 */
//////////////////////////////////////

/**************************************
 *!       Variable var,let,const
 *************************************/
/* 
// Var, let, const
//* var, let can reassign.
 var name = 'John Doe';
 console.log(name);
 name = 'Steve Smith';
 console.log(name);

// Init var
// สร้าง variable แต่ไม่ต้องใส่ value ได้ จะขึ้น undefined
var greeting;
console.log(greeting);
// undefined

// assign variable
greeting= 'Hello';
console.log(greeting);

// ? Rules letters, numbers, __, $
// can not start with number
// Muti word var 
// var firstName = 'john'; // Camel Case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case ไม่ค่อยแนะนำ ใช้พวก class ES6
 */
//////////////////////////////////////

//* LET can change re assign
/* 
let name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);
 
// CONST
const firstName = 'Sam';
console.log(firstName);
// Can not reassign
// firstName = 'Sara';
// Have to assign a value ถ้าไม่ใส่ค่าจะขึ้น error
// const lastName;
 
//* เปลี่ยนแปลงค่าของ const ไม่ได้ แต่สามารถ mutate สมาชิกใน object ได้
//? EX1
const person = {
  name : 'Bas',
  age : 27
};
// Can do 
console.log(person);
console.log(person.name);
person.name = 'Aiib';
console.log(person.name);

// Can't do เปลี่ยนค่าของ person
// person = [1,2,3];
// console.log(person);

//? EX2
const numbers = [1,2,3,4];
console.log(numbers);
// Can change array value
numbers.push(6);
console.log(numbers);
// Can't reassign value of numbers
// numbers = [1,2,3,4,5,6];

// ใช้อะไรอยู่ที่การ plan
// var,let เปลี่ยนค่าได้ เช่น loop
// const รู้ว่าค่าไม่เปลี่ยน 
 */
//////////////////////////////////////

/**************************************
 *!   Data Type : Dynamically Type
 *************************************/
// * Primitive data type and Reference Data Type
// Primative : String, Number, Boolean, Null, Undefined, Symbols(ES6)
// Reference accecs by reference : Array, Object literals, Date, etc.

// * JS is dynamic type language != Java C# C++
// type คือตัว value ไม่ใช่ variable
// Variable สามารถเปลี่ยน type ได้ตลอด

//////////////////////////////////////
/* 
// * PRIMITIVE : Accese when set variable
// String
const name = 'John Doe';
console.log(typeof name);
// Number
const age = 45;
const hasKids = true;
// Boolean
console.log(typeof age);
console.log(typeof hasKids);
// Null มีประเด็นนิดหน่อย จริงๆ ควรเป็น primitive แต่โปรแกรมแสดง object
const car = null;
console.log(typeof car);

// Undefined
let test;
console.log(typeof test)

// Symbol (new)
const sym = Symbol();
console.log(typeof sym)
 */
//////////////////////////////////////
/* 
//*  REFERENCE TYPE - Objects : Access memory reference
// Array
const hobbies = ['Code','Photo'];
console.log(typeof hobbies);

// Object literal
const address = {
  city : 'Phitsanulok',
  zipcode : '65000'
}
console.log(typeof address);

// DATE น่าจะคล้ายๆ symbol
const today = new Date();
console.log(today);
console.log(typeof today);
 */
//////////////////////////////////////

/**************************************
 *!          Type Conversion
 *************************************/
/* 
let val;

// * Number to string
val = 5;
val = String(555);
// จะคำนวณก่อน แล้ว converse
val = String(4+4);
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]); // นับ comma ด้วย

// toString()
val = (5).toString();
val = (true).toString();

// * String to number
val = Number('5');
val = Number(true); // true = 1
val = Number(false); // false = 0
val = Number(null); // null = 0
val = Number('hello'); // NaN : not a number ไม่สามารถเปลี่ยน string เป็น number
val = Number([1,2,3]); // NaN : not a number 

// Parse to Int จะแปลงเป็นตัวเลขเหมือนกัน แต่ว่าเป็นจำนวนเต็ม
val = parseInt('100.554'); // 100
// Pase to float
val = parseFloat('100.554'); // 100.54

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length); // length ใช้งานกับ string string
console.log(val.toFixed(1)); // ใช้งานกับตัวเลข กำหนดจุดทศนิยม

//////////////////////////////////////

//* Type Coesion : บังคับเปลี่ยน type ของโปรแกรม  
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2; // จะถูกบังคับเปลี่ยน type เพราะมี string ค่านึง number ค่านึง สุดท้ายไป Concatenation (ต่อคำ)

console.log(sum);
console.log(typeof sum);
 */
//////////////////////////////////////
/**************************************
 *     Numbers The Math Object
 *************************************/
// method = function
// property = attribute
/* 
const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2; // mod เอาเศษ

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.66);
val = Math.ceil(2.66);
val = Math.floor(5.6);
val = Math.sqrt(64);
val = Math.abs(-64);
val = Math.pow(8,2);
val = Math.min(6,9,41,14,56,1,-4);
val = Math.max(6,9,41,14,56,1,-4);
val = Math.random();
// random ให้เป็นจำนวนเต็มที่อยากได้ 
val = Math.random()*20+1;
// จำนวนเต็ม
val = Math.floor(Math.random()*20+1);

// Output
console.log(val);
 */
//////////////////////////////////////
/**************************************
 *!   String Methods & Concatenation
 *************************************/
/* 
const firstName  = 'Teeruch';
const lastName = 'Kaewsritas';
const age = 26;
const str = 'Hello there is my world.'
const point = '13.1234,100.12334';
const tag = 'web design:web develop';

let val;
val = firstName + lastName;

// Concatenation string
val = firstName + ' ' +lastName;
// OR
val = firstName.concat(' ',lastName)

// Append
val = 'Parichat ';
val += 'Thongsri';
val = 'Hello my name is ' + firstName + ' and I am ' + age;

// Escaping : single qoutes
val = 'That\'s awsome, I can\'t wait'; // แก้ด้วย \ backslash หรือ double qoutes 

// Length
val = firstName.length;

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Array in string
val = firstName[1]; // นับจากตัวอักษรตัวแรกคือ 0 

// indexOf() หาว่าตัวอักษรอยู่ตำแหน่งไหน
val = firstName.indexOf('r');  // นับจาก 0  เช่นกัน

// charAt() บอกว่าตัวที่ 4 คืออะไร
val = firstName.charAt(3);  // นับจาก 0  เช่นกัน

// Get last char ต้องลบ 1 เพราะ length คือตัวอักษร และ array นับจาก 0 
val = firstName.charAt(firstName.length - 1);


// substring() บอก range ของตัวหนังสือ แสดงค่า string ตามนั้น
val = firstName.substring(0,3); // ตัวที่ 0 ไม่เอาตัวที่ 3

// slice() คล้าย ๆ substring()
val = firstName.substring(0,4); // ตัวที่ 0 ไม่เอาตัวที่ 3
val = firstName.substring(3);  // แสดง 3 ถึง ตัวสุดท้าย

// split() ตัดคำ โดยอิงจาก variable str มันมองว่าเป็น array โดยมีตัวคั่นคือ space

val = str.split(' ');
val = point.split(',');
val = tag.split(':');

// replace() การแทนที่โดยอ้างตัวอักษร
val = str.replace('world','JavaScript');

// include() บอก true หรือ false
val = str.includes('Hello');
val = str.includes('foo');

// Output
console.log(val);
 */
//////////////////////////////////////

/**************************************
 *!          Template Literals
 *************************************/
/* 
const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Thailand';

// * Withont template string (es5)
// html =  '<ul><li>Name : ' + name  +
//         '</li><li>Age : ' + age + 
//         '</li><li>Job' + job + 
//         '</li><li>City : ' + city + ' </li></ul>';

//  html = '<ul>' +
//         '<li>Name : ' + name + '</li>' +
//         '<li>Age : ' + age + '</li>' +
//         '<li>Job : ' + job + '</li>' +
//         '<li>City : ' + city + '</li>' +
//         '</ul>';

// * With template string (es6) ใช้เครื่องหมาย ` (backticks)
// สามารถเรียก variable / function / if statement มาใช้งานได้

var html = `
<ul>
  <li>Name : ${name}</li>
  <li>Age : ${age}</li>
  <li>Job : ${job}</li>
  <li>City : ${city}</li>
  <li>${2+2}</li>
  <li>${hello()}</li>
  <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
</ul>`;

function hello() {
  return 'Hello';
}

// Output
document.body.innerHTML = html;
 */
//////////////////////////////////////
/**************************************
 *!          Array Method
 *************************************/

// Create some arrays
const numbers = [100, 1, 2, 45, 22, 47, 99, 1];
const numbers2 = new Array(33, 41, 47, 98, 1);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, null, { a: 1, b: 2 }, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if is array เอาไว้เชคพวก DOM, return node list
val = Array.isArray(mixed);
val = Array.isArray("hello");

// Get single value เริ่มจาก 0
val = numbers[1];
val = numbers[0];

// Array can mutate เพิ่ม ลดได้
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(4);

// //* Mutating Arrays เพิ่มตัวสุดท้ายของ array
// numbers.push(3);

// // เพิ่มที่ตัวแรกของ array
// numbers.unshift(-5);

// // Take off ตัดตัวสุดท้ายออก
// numbers.pop();

// // Take of from front ตัดตัวแรกออก
// numbers.shift();

// // Splice Values แยกคำ start to end เช่นจะเอาตำแหน่งแรกออก (0,1) ตำแหน่ง 2ใส่ (1,1)
// numbers.splice(0, 1);

// // Reverse
// numbers.reverse();

// // Concatenate Array
// val = numbers.concat(numbers2);

// // Sorting arrays
// val = fruit.sort();

// // Use the "compare function" เพราะใช้ปกติมันไม่ sort ให้
// val = numbers.sort(function(x, y) {
//     return x - y;
// });

// // Reverse sort
// val = numbers.sort(function(x, y) {
//     return y - x;
// });

// // Find first number ตามเงื่อนไข
// // ? ระวังเรื่อง mutate array
// function under50(num) {
//     return num < 50;
// }

// val = numbers.find(under50); // array ปกติจะเจอ 1
// // ?เจอ function ซ้อนกันก็ยังงงๆ อยู่

// Output
console.log(numbers);
console.log(val);

//////////////////////////////////////

/**************************************
 *!         Object Lietrals
 *************************************/
/* 
const person = {
    firstName: "Steve",
    lastName: "Smith",
    age: 27,
    email: "steve@gmail.com",
    hobbies: ["music", "sports"],
    address: {
        city: "Phitsanuloke",
        zipcode: "65000"
    },
    getBirthYear: function() {
        return 2019 - this.age;
        // ถ้าจะเรียกค่าจาก property ใน object ใช้ this keyword
    }
};

let val;
val = person;

// Get specific value
val = person.firstName; // Recommend
val = person["firstName"]; // ต้องใส่ " key ด้วย"
val = person.age;
val = person.hobbies;
// Get Value in array
val = person.hobbies[1];

// Get value in object
val = person.address.zipcode; // เรียกต่างกันคือมีจุด
val = person.address["city"]; // ไม่มีจุด แต่ต้องใส่ single qoutes

// Get from function in object
// ใช้ this keyword
val = person.getBirthYear();

// แสดง value ใน object อีกที ใช้ loop for ดึงข้อมูลได้
const people = [
    { name: "John", age: 30 },
    { name: "Mike", age: 20 },
    { name: "Sara", age: 19 },
    { name: "Jane", age: 26 }
];

// Output of people
for (var i = 0; i < people.length; i++) {
    console.log(people[i].name);
    // ดึง key ของ people
}

// Output
console.log(val);
 */
//////////////////////////////////////
/**************************************
 *!         Dates & Times
 *************************************/
/* 
let val;
const today = new Date();
// mouth, day , year time
let birthDay = new Date("4/12/1992 12:45:00");

// bithhDay ไม่ต้อง let แล้ว
birthDay = new Date("April 12 1992");
birthDay = new Date("04-12-1992");

val = today;
val = birthDay;

//? Get mouth โปรแกรมจะเริ่มที่เดือน 0 = January
val = today.getMonth();

// Get Date
val = today.getDate();

//? Get Day เริ่มจาก Sunday = 0
val = today.getDay();

// Get Year
val = today.getFullYear();

// Get Hour บอก 24 hr
val = today.getHours();

// Get Minutes
val = today.getMinutes();

// Get Second
val = today.getSeconds();

// Get mSec
val = today.getMilliseconds();

// Get time stamp บอกเป็น millisecond  ที่ผ่านมา เริ่มจาก 1 / 1 / 1970
val = today.getTime();

//////////////////////////////////////

//* เปลี่ยนค่าเดือน จากเดือน April เป็น Jan
birthDay.setMonth(0);
birthDay.setDate(21);
birthDay.setFullYear(1991);
birthDay.setHours(3);
birthDay.setMinutes(13);
birthDay.setSeconds(54);

// Out put
console.log(birthDay);
 */
//////////////////////////////////////
/************************************************************
 *!        If Statements & Comparison Operators
 ************************************************************/
/* 
// if (something) {
//   do something if true;
// } else{
//   do something else
// }

const id = "100";

// EQUAL TO "==" ไม่ใช่ "=" ซึ่งคือการ assign
// ใช้ test value อย่างเดียว ไม่ได้เชค type เช่น
// const id = 100;
// const id = '100';
// เชคใน if (id == 100) เงื่อนไขจะ true ทั้งสองอัน

// ตัวอย่าง;
console.log(1 == 1);
// expected output: true

console.log("1" == 1);
// expected output: true

console.log(1 === 1);
// expected output: true

console.log("1" === 1);
// expected output: false

// * แนะนำให้ใช้ if( id === 100) ตลอด
// Comparison
if (id == 100) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

// Strict comparison
if (id === 100) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

// NOT EQUAL TO " != "
if (id != 100) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

// NOT EQUAL TO !== จะเช็ค type ด้วยเหมือนกัน ===
if (id !== 100) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

// Test id มีมั้ย ควรจะเช็ค typeof เพราะว่ากรณีไม่มี id คือ undefined โปรแกรมจะขึ้น error
// const id = 100;
// if (id) {
//     console.log(`The ID is ${id}`);
// } else {
//     console.log("No id");
// }

// Test if undefined
// if (typeof id !== "undefined") {
//     console.log(`The ID is ${id}`);
// } else {
//     console.log("No id");
// }
 */
//////////////////////////////////////
/* 
//* Greater (>=) or less than (<=)
// const id = "300";
// if (id >= 300) {
//     console.log("CORRECT");
// } else {
//     console.log("INCORRECT");
// }

//* If Else
// const color = "red";
// if (color === "red") {
//     console.log("Color RED");
// } else if (color === "blue") {
//     console.log("Color BLUE");
// } else {
//     console.log("NOT red and blue.");
// }

// LOGICAL OPERATORS AND (&&) OR (||)
const name = "Steve";
const age = 20;
// AND (&&)
if (age > 0 && age < 12) {
    console.log(`${name} is child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is teenager`);
} else {
    console.log(`${name} is adult`);
}
// OR
if (age < 16 || age > 65) {
    console.log(`${name} can't run in a race`);
} else {
    console.log(`${name} is register for run in a race`);
}

// TERNARY OPERATOR
// IF STATEMENT ใน 1 บรรทัด
console.log(age === 20 ? "correct" : "incorrect");

// * Without BRACE ไม่แนะนำ
const id = 100;
if (id === 100) console.log("correct");
else console.log("incorrect");
 */

//////////////////////////////////////

/***********************************
 *!        Switches
 ***********************************/
/* 
// จะวน loop เมื่อ true
// อย่าลืม break ที่ case
// clean code มากกว่า else if เยอะๆ
// จะเข้า เงื่อนไข เมื่อ expression (color) เป็นจริงใน case

const color = "red";
switch (color) {
    case "red":
        console.log("Color is red.");
        break;
    case "blue":
        console.log("Color is blue.");
        break;
    default:
        console.log("Color not red and blue.");
}

let day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

console.log(`Today is ${day}`);
 */

/********************************************************
 *!        Function Declarations & Expressions
 *******************************************************/
// * FUNCTION DECLARATIONS
/* 
function greet(firstName, lastName) {
    // ในนี้เรียก function scope
    // return console.log("Hello");
    return "Hello " + firstName + " " + lastName;
}

// Call function
// greet();

// ถ้าไม่ใส่ console.log
console.log(greet("John", "Doe"));

// ถ้าไม่ใส่ค่า parameter ใน function จะ undefined
console.log(greet());
 */
//////////////////////////////////////

//* Defualt Parameter in function ES5
/* 
function greet(firstName, lastName) {
    if (typeof firstName === "undefined") {
        firstName = "John";
    }
    if (typeof lastName === "undefined") {
        lastName = "Doe";
    }
    return "Hello " + firstName + " " + lastName;
}

console.log(greet());
 */
//////////////////////////////////////
//* Defualt Parameter in function ES6
/* 
function greet(firstName = "John", lastName = "Doe") {
    return "Hello " + firstName + " " + lastName;
}

console.log(greet());
 */
//////////////////////////////////////

// * FUNCTION EXPRESSION
// คือใส่ function ใน variable assignment
/* 
const squre = function(x = 3) {
    return x * x;
};

console.log(squre(2));
console.log(squre());
 */
//////////////////////////////////////

// * IMMIDIATLEY INVOLABLE FUNCTION EXPRESSION - IIFEs

// involed ที่เกี่ยวข้อง
// ประกาศ function และเรียกใช้งานทันที คือมี (); ต่อท้าย
/* 
(function() {
    console.log("IIFEs Ran..");
})();

(function(name) {
    console.log("Hello " + name);
})("Bas");
 */

//////////////////////////////////////

// * PROPERTY METHODS
//! Function put inside of an object called a method
/* 
const todo = {
    add: function() {
        console.log("Add Todo");
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
};

// สามารถ defined function นอก object ก็ได้ จะเข้าไปเป็นสมาชิกของ todo
// เรื่อง global scope กับ function scope
todo.delete = function() {
    console.log("Delete todo");
};

todo.add();
todo.edit(11);
todo.delete(11);

console.log(todo);
 */

//////////////////////////////////////

/**************************************
 *!        General Loops
 **************************************/

//  * FOR LOOP
// (INIT VALUE ; CONDITION ; INCREMENT จนกว่า บล็อกกลางจะ false)
/* 
for (let i = 0; i < 10; i++) {
    if (i === 2) {
        console.log("2 is my favorite number.");
        continue;
        // GOTO NEXT LOOP จะข้ามเลข 2 ไม่ run console.log(i);
    }

    if (i === 6) {
        console.log("Stop the loop with BREAK");
        break;
        // หยุดเมื่อเจอเงื่อนไขนี้
    }

    console.log("Number " + i);
}
 */

//////////////////////////////////////
//  * WHILE LOOP
// LOOP ไปเรื่อยๆ จนกว่าจะ false
// ! ระวังเจอ infinite loop ถ้าลืม i++
/* 
let i = 0;
while (i < 10) {
    console.log("Number " + i);
    i++;
}

console.clear;
 */
//////////////////////////////////////
// * DO WHILE LOOP
// จะ do จะ run ไปเรื่อยเปื่อย จนกว่า while จะ false
/* 
let i = 0;
do {
    console.log("Number " + i);
    i++;
} while (i < 10);

// แต่ถ้า while ไม่ false มันก็จะ run เช่น ใส่ 100 ซึ่งขัดกับ while (j<10) ก็จะแสดง 100
let j = 100;
do {
    console.log("Number " + j);
    i++;
} while (j < 10);
 */

//////////////////////////////////////

//* LOOP Though ARRAY
/* 
const cars = ["Ford", "Honda", "Toyota", "Tesla"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

//* For eash by array name เหมือนกับ for ยกเว้นใส่ค่าตรง function
// ? forEach จะมาพร้อมกับ function คล้ายกับ map จะวน loop เหมือกนัน

cars.forEach(function(car, index, array) {
    console.log(`${index} : ${car}`);
    // index คือแสดง index ของ array
    console.log(array);
    // array คือแสดงทั้ง array
});
 */
//////////////////////////////////////

//* MAP เดี๋ยวจะมีเพิ่มเติมตอนหลัง
/* 
//? loop ใน id ของแต่ละ user เพื่อสร้าง arrayconst
users = [
    { id: 1, name: "John" },
    { id: 2, name: "Sara" },
    { id: 3, name: "Karen" },
    { id: 4, name: "Steve" }
];

const ids = users.map(function(user) {
    return user.id;
});

console.log(ids);
 */
//////////////////////////////////////

//* For in loop
/* 
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 20
};

// x จะแสดง key index
for (x in user) {
    // console.log(x);
    // แสดง key
    console.log(`${x} : ${user[x]}`);
    // แสดง key และ value
}
 */
//////////////////////////////////////

/**************************************
 *!        The Window Object
 **************************************/
// WINDOW METHODS / OBJECTS / PROPERTIES
/* 
// same
// window.console.log(123);
// same
// console.log(123);

// * Alert
// window.alert('Hello');

// * Prompt : take input
// const input = prompt();

// Show input
// alert(input);
// ใช้ bootstrap หรือ DOM ทันสมัยกว่า

// * Confirm : yes , no
// if(confirm('Are you sure')){
//     // ถ้าจริงแสดง YES
//     console.log('YES');
// } else {
//     console.log('NO');
// }

let val;

// * Outer height and width ข้างนอก ทั้ง window
val = window.outerHeight;
val = window.outerWidth;

// * inner height and width กรอบด้านในหน้าของหน้าต่าง
val = window.innerHeight;
val = window.innerWidth;

// * Scroll points บอกว่าเราอยู่ตรงไหนของเพจ กรณีมี scroll bar
val = window.scrollY;
val = window.scrollX;

// * Location Object บอกว่า host port protocal อะไร
val = window.location;
// เข้าไปดู value ของ object
val = window.location.hostname;
val = window.location.href;
val = window.location.port;
// url ที่ใส่ ?id=1&name=Bas
val = window.location.search;

// * Redirect คือเข้าสู่ web เมื่อเรากำหนดค่า
// window.location.href = "http://google.com";

// * Reload page จะ reload infinity
// window.location.reload();

// * History Object คือ history เข้าเว็บอะไรมาบ้าง
// window.history.go();
// ย้อนกลับไปใช้ (-) เดินหน้าใช้ (2)
// window.history.go(-2);

// บอกว่าไปมากี่เว็บ
val = window.history.length;

//* Navigator Object = ข้อมูลของ browser
val = window.navigator;
val = window.navigator.appName; //* สามารถ filter ผู้ใช้แต่ละเวอร์ชั่นได้
val = window.navigator.appVersion;
val = window.navigator.userAgent; // คล้ายอันบน
val = window.navigator.platform; // กำหนดได้ว่า ถ้าผู้ใช้ ใช้ window ให้แสดง .. ถ้า osx ให้ต่างออกไป
val = window.navigator.language;

// Output
console.log(val);
 */
//////////////////////////////////////

/************************************************
 *!        Block scope with let & const
 ************************************************/
// * Global Scope
var a = 1;
let b = 2;
const c = 3;

//////////////////////////////////////

// * Function Scope
/* 
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log("Function Scope: ", a, b, c);
    // ตัวแปลแยก scope กันชัดเจน ใช้ variable ชื่อเหมือนกันได้ แต่ค่าคนละอย่าง
}
 */

// test();
//////////////////////////////////////

// *Block Scope
// * ตัวแปรที่เป็น var จะเปลี่ยนไปตามที่ block กำหนด
// ! ระวังเรื่อง var ถ้าตั้งชื่อเหมือนกัน แต่ถ้าประกาศใหม่อีกรอบ ค่าจะเปลี่ยนไปเป็นอันล่าสุด
// * let, conts จะคงอยู่เหมือนเดิม ตาม global scope ตั้งค่าไว้ ซึ่งเป็นปรกติของทุกโปรแกรม ตัวแปรใน block ควรจะแยกกับตัวแปรที่ global
// ? ยกเว้นแต่ว่า let b = 10;
// ? b = 15; คำตอบของ global จะเป็น 15 เพราะเรา assign ค่าใหม่ ไม่ได้ประกาศตัวแปรใหม่

// EX 1
// if (true) {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log("If Scope: ", a, b, c);
// }

//  EX 2 ใช้ var a วน loop จบค่าจะเปลี่ยนไปเป็น 10
// for (var a = 0; a < 10; a++) {
//     console.log(`Loop: ${a}`);
//     // ใช้ var ""
// }

console.log("Global Scope: ", a, b, c);

// สรุป
// var คือ block scope
// let & const คือ function scope

//////////////////////////////////////
