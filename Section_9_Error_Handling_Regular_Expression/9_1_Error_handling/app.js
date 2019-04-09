// มีไว้เชค error โดยไม่ต้องหยุดโปรแกรมทั้งหมด

const user = { email : 'jdoe@gmail.com'}

try {
  //* Produce a ReferencError
  // myFunction();

  // * Produce a TypeError
  // null.myFunction();

  // * Will produce SyntaxError
  // eval('Hello World'); // evaluate จะทำอะไรก็ตามที่อยู่ใน ' ' อาจจะใช้ ' "Hello" ' ก็จะเป็น string

  // * Will produce a URIError
  // decodeURIComponent('%');

  if(!user.name) {
    // เช็คว่ามี name ใน user object มั้ย ในวงเล็บจะเป็น true เพราะไม่มี !user.name = !false
    // throw 'User has no name';

    // สร้าง error เอง จะมีผลต่อ block catch เช่นกัน
    throw new SyntaxError('User has no name');
  }

} catch(error) {
  // อาจใช้ e, err
  console.log(error);
  // console.log(`${error.name} : Its' Stupid!!`)
  // จะแสดงเมื่อมี error เกิดขึ้น blog ข้างบน

  // // Message error
  // console.log(error.message);

  // // Type of error
  // console.log(error.name);

  // // จะเช็คว่าเป็น error ประเภทไหน
  // console.log(error instanceof ReferenceError); // true
  // console.log(error instanceof TypeError); // false

  // แสดงข้อความจาก error ที่สร้างเอง
  console.log(`User Error: ${error.name}`)
} finally {
  // จะ run script ในนี้ ไม่ว่าอะไรจะเกิดขึ้นก็ตาม
  console.log('Finally runs reguardless of result');
}

// error เกิดที่ block try แต่โปรแกรมสามารถ run ต่อได้
console.log('Program Continue...')