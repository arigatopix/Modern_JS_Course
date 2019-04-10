// BASIC เหมือนกันทุกภาษา

// Regular Expression  คือ  pattern of character, pattern matching, pattern searcing ที่มี format โดยเฉพาะ เช่น email, phone number
/**********************************************
 * !  Regular Expression Evaluate Function
***********************************************/
/* 
let re;
// RE ใช้ forward slat แล้วก็มี character ข้างใน
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = Global search ทุกตัวที่เหมือนกับ RE ไม่ใช้เฉพาะตัวแรก

// console.log(re);

// * Show Regular Expresstion in side / /
// console.log(re.source);

// Function use for RE
// * exec() - Return result in an array or null
// const result = re.exec('Bas hello world hello');
// console.log(result)
// // ได้ array
// // ค่า index บอกตำแหน่งที่เจอ string ที่เหมือนกับ RE Z(พบแค่ตัวแรกที่เจอ)
// // ถ้าไม่มีคำว่า 'hello'ก็จะขึ้น NULL 
// // เป็น case sensitive

// // Show result index
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);
////////////////////////////////////////////////

// * test() - Return ture or fasle
// const result = re.test('Hello');
// console.log(result); // false เพราะเป็น case sensitive
////////////////////////////////////////////////

// * match() - Return result array or null ใช้ได้เหมือนกับ exec() แต่เรียกใช้ต่างกัน
// const str = 'Hello There';
// const result = str.match(re); // ถ้า excec พิมพ์ re.exec(str)
// console.log(result);
////////////////////////////////////////////////

// * search() - Returns "index" of the first match if not found returns -1
// const str = 'Hello bas hello there';
// const result = str.search(re);
// console.log(result);
////////////////////////////////////////////////

// * replace() - Returns new string with some or all matches of a pattern
// const str = 'Hello there';
// const newStr = str.replace(re, 'Hi'); // replace /hello/
// console.log(newStr);
 */
////////////////////////////////////////////////

/**********************************************
 * !        Metacharacter Symbols
***********************************************/
/* 
let re;
// Literal Characters (literal คือสะกดคำ)
re = /hello/i;

// Metacharacter Symbols - คิอ ให้โปรแกรมรู้ว่าจะเช็คช่วงไหน

// Must start with (^) ต้องเริ่มด้วย h 
re = /^h/i;

// Must end with ($) ต้องจบด้วย d หรือทั้งคำเลยก็ได้ จะเว้นวรรคที่หน้าสุดเลยก็ได้
re = /world$/i;

// Must begin and end with (hello)
re = /^hello$/i;

// Match any ONE character - ใช้ Dot (period character)
re = /h.llo/i; // คือตัวอะไรก็ได้ทีอยู่ตรง . (dot) จะ true ต้องมีตัวอักษร ถ้า str = 'Hllo' จะ false

// Matches any character 0 or more times เหมือนเช็คข้างหน้า * กับหลัง * ว่าตรงกันมั้ย
re = /h*llo/i;

// Optional character ใช้ (?) - ให้กรอกตัวไหนก็ได้ a หรือ e ในประโยค อย่างใดอย่างหนึ่ง หรือไม่มี a e ก็ได้ (เช็คแค่มี gr มั้ย)
// re = /gra?e?y/i;

// // Escape character - หมายถึงให้หยุดยกเว้น เช่น str = Grey? และจะให้จบที่ ? (ปกติ ? คือ optional) วิธีแก้คือใส่ back slach โปรแกรมจะคิดว่า ? คือตัวอักษรปกติ
re = /gra?e?y\?/i;

// String to match
// const str = 'hllo';
const str = 'Grey?';

// Log Result
const result = re.exec(str); // returns array
console.log(result);

// Regular Expression Test เทียบ RE  กับ String 
function reTest(re, str) {
  if(re.test(str)) {
    // test() - returns true or false
    console.log(`Str : ${str} matches RE: ${re.source}`);
  } else {
    console.log(`Str : ${str} dose NOT match  RE:${re.source}`);
  }
}

reTest(re, str);
 */

////////////////////////////////////////////////

/**********************************************
 * !     Character Sets & Quantifiers
***********************************************/
/* 
let re;
// Brackets [] - Character Sets ต้องมีตัวใดตัวหนึ่ง 
// ให้มี a or e
re = /Gr[ae]y/i;     

// G or F case sensitive
re = /[GF]ray/i;       

// Match anything except a G or F ถ้า ^ อยู่ใน [^ ] คือการยกเว้น แต่ถ้า ^ อยู่นอก คือให้มี ^[]
re = /[^GF]ray/i;       

// Match any uppercase letter
re = /[A-Z]ray/;      

// Match any lowercase letter
re = /[a-z]ray/;         

//* Match any letter ยกเว้นตัวเลข และตัวพิเศษ
re = /[A-Za-z]ray/;         

// * Match any digit (10 ก็ได้ เพราะหน้า ray เป็นอะไรก็ได้)
re = /[0-9][0-9]ray/;        

// ///////

// Braces {} - Quantifiers ดูปริมาณของ ..
// Must occur exactly {m} amount of times ตัวอักษรด้านหน้า {} ต้องมี l สองตัวเท่านั้น
re = /Hel{2}o/i;        

// ต้องมี l สอง ถึง สี่ตัว ห้ามขาด ห้ามเกิน
re = /Hel{2,4}o/i;      

// ต้องมีตัว l อย่างน้อย 2 ตัวขึ้นไป {m} times
re = /Hel{2,}o/i;        
///////
// Paretheses () - Grouping 
// อยากได้ 3x จำนวน {3} ครั้ง ถ้าปกติ [0-9]x{3} จะดูแค่ x เท่านั้น เลยต้อง group ด้วย () และถ้าอยากได้แค่ 3 ชุดจริงๆ ให้ใส่  ^ กับ $
re = /^([0-9]x){3}$/; 

// String to match
// const str = 'fray';
// const str = 'helllo';
const str = '3x3x3x';

// Log Result
const result = re.exec(str); // returns array
console.log(result);

// Regular Expression Test เทียบ RE  กับ String 
function reTest(re, str) {
  if(re.test(str)) {
    // test() - returns true or false
    console.log(`Str : ${str} matches RE: ${re.source}`);
  } else {
    console.log(`Str : ${str} dose NOT match  RE:${re.source}`);
  }
}

reTest(re, str);
 */
////////////////////////////////////////////////

/**********************************************
 * !     Shorthand Character Classes
***********************************************/

let re;

// * Shorthand character Classes
// Word character - alphanumeric (ตัวอักษรหรือเลข) or _ (Underscore) returns ตัวเลขหน้าสุด
re = /\w/; 

// \w+ คือ return ค่า one or more word character ต่างกันตรง output
re = /\w+/; 

// Non-Word character พวกตัวอักษรพิเศษ
re = /\W/; 

// Match any digit ตัวเลข คำตอบได้ตัวแรกตัวเดียว
re = /\d/;

// Digit 0 or more times เหมือนกัน แต่คำตอบมาหลายตัว
re = /\d+/;

// Non Digit ใช้ตัวใหญ่เหมือน W
re = /\D/;

// Match whitespace character ต้องมี space หน้า หลัง กลางตัวอักษก็ได้ จะตอบค่าว่าง
re = /\s/;

// Match NON-whitespace คำตอบห้ามว่างเปล่า (tab, space, '') แต่มี space ระหว่างอักษรได้ (คำตอบเป็น space กับตัวอักษร)
re = /\S/;

// Word booundary ต้องการคำๆ นั้นจริงๆ เช่น re= /Hell/ และ str = 'Hello, welcome to hell'
re = /Hell\b/i;

// * Assertions 
// Match 'x' only if follow by 'y' คล้ายๆ if ternary condition (.. ? .. : ..)
re = /x(?=y)/;

// Match 'x' only if NOT follow by 'y'
re = /x(?!y)/;

// String to match
const str = 'x';

// Log Result
const result = re.exec(str); // returns array
console.log(result);

// Regular Expression Test เทียบ RE  กับ String 
function reTest(re, str) {
  if(re.test(str)) {
    // test() - returns true or false
    console.log(`Str : ${str} matches RE: ${re.source}`);
  } else {
    console.log(`Str : ${str} dose NOT match  RE:${re.source}`);
  }
}

reTest(re, str);

////////////////////////////////////////////////