/*********************************************************************
 *!                     Phototypal Inheritance
 *********************************************************************/
// ต้องการ Inherite หมายถึงให้ Object constructor อื่นๆ (Customer) เข้ามาใช้กับ Object Person ได้ คล้ายๆ Python

// สมมติทั้งหมดจนถึงเส้นแบ่ง คือ class
//*  Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting (Person.prototype)
// คล้ายๆ สร้าง function ใน class
Person.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
};

Person.prototype.costs = function () {
    return 400;
};
//---------------------------------------------------------------------

//* Customer constructor
// คล้ายๆ SUB Class ที่มี parent คือ Person
function Customer(firstName, lastName, phone, membership) {
    // จะให้ใช้ prototype ของ Person ได้ (ลองดู python เรื่อง Car กับ Electric(Car))
    //* อย่าลืมไปกำหนดให้ Inheritance กับ Person ด้วย (เรียก Parent)
    Person.call(this, firstName, lastName); // บอก parent ว่านี่คือ child

    this.phone = phone;
    this.membership = membership;
}
//---------------------------------------------------------------------

// * Inheriting Person prototype methods กำหนด prototype ของ Customer ใช้อันเดียวกับ Person.prototype ไม่งั้นจะใช้ greeting ไม่ได้
// สร้าง prototype ของ Customer
Customer.prototype = Object.create(Person.prototype);

//---------------------------------------------------------------------

// * Make customer.prototype return Customer()
// สร้าง Object ของ Customer เอง ต่างกันที่ เดิม prototype ของ greeting จาก inherite จาก Person
Customer.prototype.constructor = Customer;

//---------------------------------------------------------------------

// * Overwrite Greeting : ชื่อ function เหมือนกัน แต่คำตอบไม่เหมือนกัน
// ต้องไปกำหนด prototype ให้ Customer ด้วย
Customer.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${
        this.lastName
        } welcome to our company`;
};

// Static
Customer.prototype.getMemberCost = function () {
    return 500;
};

//---------------------------------------------------------------------
//                         Create Instance
//---------------------------------------------------------------------
// Create person
const person1 = new Person("John", "Doe");

console.log(person1); // prototype จะมี constructor
console.log(person1.greeting());
console.log(person1.costs());

//---------------------------------------------------------------------

// Create customer
const customer1 = new Customer("Tom", "Smith", "555-555", "Standard");
console.log(customer1);
console.log(customer1.hasOwnProperty("firstName"));
// Customer Greeting (จะมี prototype ของ Person แสดงขึ้นมา)
console.log(customer1.greeting());
console.log(customer1.getMemberCost());

//---------------------------------------------------------------------

//! รับค่า ให้มองว่า Person กับ getMomberCost เป็น object หนึ่ง มีโครงสร้างประมาณนี้

/*
const Object = {
    Person.prototype : {
        Person : function(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
        },
        costs : 500,
        greeting : function(){
            return `Hello there ${this.firstName} ${
                this.lastName
                } welcome to our company`;
        }
    }
};

 */
console.log(Person.prototype.costs());
