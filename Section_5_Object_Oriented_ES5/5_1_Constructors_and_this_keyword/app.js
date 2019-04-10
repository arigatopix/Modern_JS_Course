//! Base On ES5

// การสร้าง Object แบบปกติ
/* 
const bas = {
  name : 'Bas',
  age : 26
}

const aib = {
  name : 'Aib',
  age : 27
}

console.log(bas);
console.log(aib.name);
 */
///////////////////////

// Person constructor
// name constructor functions with an upper-case first letter.

function Person(name,dob) {
  // เรียกว่า constructor
  this.name = name;
  // property ของ object constructor 
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime(); // วันปัจจุบัน ลบ วันเกิด return millisec
    const ageDate = new Date(diff); // สร้างวันที่จาก millisec
    return Math.abs(ageDate.getFullYear() - 1970); // คำนวณอายุ เอาปี ลบด้วยปีเริ่มต้นของโปรแกรม
    // Math.abs คือ absolute เอาแต่ค่า +
  };
}

// Create Object
const aib = new Person('Parichat','01-21-1992');
console.log(aib.calculateAge());

///////////////////////

function Car(make, model) {
  this.make = make;
  this.model = model;
};

const car1 = new Car('Honda','city');
console.log(car1);

// Adding a Property to an Object
// car1.year = 2014;
// console.log(car1);

// Adding a Method to an Object
car1.type = function() {
  return `My car ${this.make} model ${this.model}`
}
console.log(car1.type());

// ?  Adding a Property to a Constructor ได้ด้วย !!!
Car.year = 2014;

// ! แต่ถ้าอยากเพิ่ม  property to constructor ต้องประกาศใหม่ ทั้งหมด

// ? จึงเป็นที่มาของ prototype
