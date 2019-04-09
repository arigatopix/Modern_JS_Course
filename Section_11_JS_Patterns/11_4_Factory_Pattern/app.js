/********************************************
 *!          Factory Pattern
**********************************************/
// Factory function จะสร้าง interface เพื่อสร้าง Object (es5) โดยใช้ subclasses
// มักจะใช้กับ object ที่บางส่วนก็เหมือนกัน บางส่วนก็ต่างกัน เช่น member ลูกค้า properties มีชื่อ และเป็นสมาชิกเหมือนกัน แต่ type ของสมาชิกคนละแบบ
// Factory pattern หรือ Factory method มักใช้ sub class 
/////////////////////////////////

// จะสร้างข้อมูลลูกค้า

function MemberFactory() {
  this.createMember = function(name, type) {
    // this.createMember ถือว่าเป็น object เรียก MemberFactory.createMember('name','type') จะ return ค่า member object
    let member;
    // check ประเภท member เพื่อสร้าง function เก็บข้อมูล
    if(type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard'){
      member = new StandradMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }

    // สร้าง member ให้เป็น object member = { type : 'type' , define : function(){ console.log ...} }
    member.type = type;

    member.define = function() {
      // ใช้ this ได้ เพราะ this เหมือนเป็น global scope ของ function define
      console.log(`${this.name} (${this.type}) : ${this.cost}`);
    }

    // เอาค่าไปใช้นอก Object createMember
    return member;
  }
}

// Function ข้างนอกนี้ (Global scope) ดึงเอาไปใช้ใน MemoryFactory function
const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5';
}
const StandradMembership = function(name) {
  this.name = name;
  this.cost = '$10';
}
const SuperMembership = function(name) {
  this.name = name;
  this.cost = '$25';
}

// Initiates
const members = [];
const factory = new MemberFactory();

// Create New member
members.push(factory.createMember('John Doe','simple'));
members.push(factory.createMember('Jan Smith','standard'));
members.push(factory.createMember('Mike Jackson','super'));
// จะได้ object type member

console.log(members);

// อยากรู้ว่ามี members กี่คน ที่บอก name, type and cost เอา forEach วนใน member.define();
members.forEach(function(member) {
  member.define();
  // ใช้ define() เพราะ มันเป็น object function และใน function มี console.log อยุ่แล้ว
});