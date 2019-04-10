/*********************************************************************
 *!                          Sub Classes
 *********************************************************************/

class Person {
  constructor(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

// Class Customer Extend จาก Class Person 
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    // call parent ด้วย function super() คล้าย python
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }
  
  greeting() {
    // overwrite ได้ หรือจะเรียกจาก parent ได้
    return `Hello there ${this.firstName} ${this.lastName} welcom to my restaurant`;
  }

  // แต่ Parent ไม่สามารถใช้ function ของ child ได้ (เหมือนกับ python)
  static getMembershipCost() {
    return 500;
  }

}
// ---------------------------------------------------------------
const john = new Customer('John','Doe','555-555-5555','Standard');

console.log(john);
console.log(john.greeting());

// Call static
console.log(Customer.getMembershipCost());

// Parent (Class Person) ไม่สามารถเรียก function ของ child ได้
// console.log(Person.getMembershipCost());
// ---------------------------------------------------------------