// ES6 Standard (ES2015)

// * Iterator : Advance loop สามารถ Pause loop iterate ได้ สั่ง next ได้ return value 

// Iterator Example

function nameIterator(names) {
  let nextIndex = 0; //เอาไว้ข้างนอก next
  // ถ้าเอาไว้ใน next เรียกครั้งถัดไป index ก็จะมีค่า 0
  
  return {
    // return ของ function ปกติ
    next : function() {
      // iterator return อะไรบางอย่าง next หมายถึงต่อไปจะทำอะไรต่อ
      return nextIndex < names.length ?
      { value : names[nextIndex++], done : false } :
      { done : true }
      // ใช้ iterator ternary ปกติ (true/false) ? { true do something } : { false do some thing}
    }
  }
}

// Create an Array of names
const nameArr = ["Bas", "Aiib", "Parichat", "Teeruch"];

// Init iterator and pass in the nameArr
const names = nameIterator(nameArr);

console.log(names.next().value);
// names.next ได้ () Object value  ชื่อแรกใน index 0 และ status done : false

// อยากได้ชื่อถัดไปก็เรียก names.next()
console.log(names.next().value); // index 1
console.log(names.next().value); // index 2
console.log(names.next().value); // index 3
console.log(names.next().value); // undefined เพราะไม่มีชื่อแล้ว

/////////////////////////////////////

// * Generators : เหมือนกับ iterators แต่ return multiple value

// ** Generators Example : ต้องใส่ * หลัง function บอก JS ว่าเป็น generators นะ
/* 
function* sayNames() {
  yield 'Bas';
  yield 'Aiib';
  yield 'Teeruch';
  yield 'Parichat';
}

// เรียก function
const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value); // undefined

// ได้คำตอบเหมือนกันกับ iterator
// ข้อแตกต่างคือเอา array ไว้ใน Generator (yield)
 */
/////////////////////////////////////

// * Example Generators
// ID Creator
/* 
function* createIDs() {
  let index = 0;
  
  while(true) {
    // สร้าง index ไปเรื่อยๆ เมื่อเรียก generators ไปใช้ ใช้งานกับอะไรที่ต้องสร้างไปเรื่อยๆ
    yield index++;
  }
}

const genID = createIDs();
// สร้างเรื่อยเปื่อย
console.log(genID.next().value);
console.log(genID.next().value);
console.log(genID.next().value);
console.log(genID.next().value);
console.log(genID.next().value);
console.log(genID.next().value);
 */