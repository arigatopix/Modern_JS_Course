/*********************************************************************
 *!             ES6 Classes จะเหมือนกับพวก python, java, c
 *********************************************************************/
// ---------------------------------------------------------------
// *Python
 /* 
class Person():
  def __init__(self,firstName,lastName):
    self.firstName = firstName
    self.lastName = lastName

  def greeting(self):
    return print('Hello '+ self.firstName)
*/
// ---------------------------------------------------------------

//* Create Class (เหมือน Python เด๊ะ) แต่บาง browser ยังไม่ support 
class Person {
  constructor(firstName,lastName,dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  // defined function จะอยู่ใน prototype
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getMarried(newLastName) {
    this.lastName = newLastName;
  }

  // Function ที่เป็น static method ไม่ยุ่งกับค่าที่สร้างจาก object
  static addNum(x,y) {
    return x + y;
  }
}
// ---------------------------------------------------------------
const marry = new Person('Marry','Williams','04-12-1992');
console.log(marry);
console.log(marry.calculateAge());

marry.getMarried('Thomson');
console.log(marry.greeting());
// ---------------------------------------------------------------

// Static method
// console.log(marry.addNum(1,2)); // ใช้ไม่ได้เพราะ addNum เป็น method ไม่ใช่ function
console.log(Person.addNum(1,2));