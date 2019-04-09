/****
 * NOTE 
 - extract variable from array, object ใช้ร่วมกับ framework react บ่อย
 */

// * Destructuring Assignment
/* 
let a, b;
[a, b] = [100, 200];
// Rest pattern ... (call spred operator)
[a, b, c, ...rest] = [100,200,300,400,500];
// console.log(rest); // value นอกเหนือจาก a,b,c

// * Object มีวงเล็บด้วย
({a, b} = {a: 100, b:200, c:300, e:400, d:5000});
// console.log(a,b); // 100,200

// use ...rest
({a, b, ...rest} = {a: 100, b:200, c:300, e:400, d:5000});
// console.log(rest); // {c:300, e:400}
 */
/////////////////////////////

// * Array Destructuring
/* 
const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;
console.log(person1, person2, person3)
 */
/////////////////////////////

// * Parse array returned
/* 
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}
const [person1, person2, person3] = getPeople();
console.log(person1, person2, person3);
// ได้เหมือนส่งผ่าน array
 */
/////////////////////////////

// * Object Destructuring ใช้กับ Library, ES6 Module สามารถ export หรือ get function, property ใน object ได้

const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miamy',
  gender: 'male',
  sayHello: function () {
    return console.log('Hello');
  }
}

// Old ES5 call
/* 
const name = person.name,
      age = person.age,
      city = person.city,
      gender = person.gender;
 */

// New ES6 Destructuring
const { name, age, city, gender, sayHello } = person; // บรรทัดเดียว อ้างถึง object  และ function ข้างใน

console.log(name, age, city);

// Call function
sayHello();

// จะเจออีกทีเรื่อง Module