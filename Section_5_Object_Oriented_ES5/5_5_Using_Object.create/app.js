/*********************************************************************
 *!                     Using Object.create
 *********************************************************************/
// วิธีการสร้าง object อีกวิธีนึง create prototype in parent object
// ที่เรียกว่า Function Expression กับ Function Declarations

// *** Function Expression สามารถสร้าง anonymous (function ไม่มีชื่อ) ไปใช้งานได้ ของ python คือ lamda
const personPrototypes = {
    greeting: function() {
        // มันคือ personPrototypes.prototype.greeting = function...
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
};
//----------------------------------------------------------------------

// Create New Object
const marry = Object.create(personPrototypes);
marry.firstName = "Marry";
marry.lastName = "Smith";
marry.age = 30;

// ลองดู prototype
console.log(marry.greeting());
console.log(marry);

// เปลี่ยนนามสกุล
marry.getsMarried("Williams");
console.log(marry.greeting());

// Create another person อีกวิธีนึง
const bas = Object.create(personPrototypes, {
    firstName: { value: "Teeruch" },
    lastName: { value: "Kaewsritas" },
    age: { value: 26 }
});

console.log(bas.greeting());
//----------------------------------------------------------------------

// *** Function Declaration (Function Statement)
/* 
function Person(firstName,lastName) {
  ..
}
 */
