/*********************************************************************
 *!              Phototypes Explained (ES5)
 *
 *********************************************************************/
/* 
***
All JavaScript objects inherit properties and methods from a prototype:
***

Person , inheritance มาจาก Person.prototype

Object.prototype : ใหญ่สุด เป็นของ JS ไม่สามารถแก้ไขได้ (ลึกสุด)

Person.prototype : เป็น parent ของ Person ||| มีไว้เพื่อ เพิ่ม method หรือ properties ภายหลัง 

 */
//----------------------------------------

// ** สร้าง Object constructor (Person.prototype)
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // calculateAge จะอยู่ใน Person กรณีคำนวณคล้ายๆ กัน มักจะสร้าง Object constructor แยก ง่ายต่อการปรับปรุง code
  /* 
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime(); 
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getFullYear() - 1970);
  };
   */
}

//----------------------------------------
// ** เพิ่ม Methods หรือ Properties ใน Object constructor
// เน้นใช้กับ function ที่มันใช้เหมือนๆ กันในทุกๆ คน ไม่ต้องกำหนดใหม่ทุกครั้ง ในการสร้าง Object 
// สร้าง function แบบ Function Expression

// *  Calculate age (method)
Person.prototype.calculaetAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getFullYear() - 1970);
};

// * Get Full Name (property)
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

// * Get Married (property)
Person.prototype.getMaried = function (newLastName) {
  this.lastName = newLastName;
}


//----------------------------------------

// * Create Object
const marry = new Person('Marry', 'Johnson', 'March 20 1999');
console.log(marry);

//----------------------------------------

// เรียก prototype ผ่าน object
console.log(marry.calculaetAge());
console.log(marry.getFullName());

// เปลี่ยนชื่อ
marry.getMaried('Smith');
console.log(marry.getFullName());

//----------------------------------------

// เช็คว่า Object เป็นเจ้าของ property หรือ method มั้ย
console.log(marry.hasOwnProperty('firstName')); // มาจาก Person
console.log(marry.hasOwnProperty('getFullName')); // มาจาก Person.prototype

// ! Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.