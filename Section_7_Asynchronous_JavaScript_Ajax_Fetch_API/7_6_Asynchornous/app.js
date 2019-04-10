
/**
 * Example Synchronous JS : เรียกมาทีเดียวหมดเลย
 */
/* 
const second = () => {
  console.log('Second');
}

const first = () => {
  console.log('Hey there first');
  second();
  console.log('The End');
}
first();
 */

/**
 * Example Asynchronous JS : 
 */

const second = () => {
  setTimeout(() => {
    // setTimeout เป็น callback function ข้างนอก หลังจาก 2 วิ 
    // หลังจาก 2 วิ callback function จะเข้ามาที่ message queue และจะกลับมา run function ใน body (console.log('second')) ด้วย event loop
    console.log('Second');
  }, 2000);
}

const first = () => {
  console.log('Hey there first');
  // เรียก function second
  second();
  console.log('The End');
}

first();
// second จะถูกแสดงหลังจากเวลาผ่านไป 2 วินาที

/* ข้อดี
- ตัวอย่างเช่น หน้าเว็บโหลด content กับโหลดรูป ถ้าแบบ Synchronous หน้าเพจจะโหลดทีละอย่าง
- ถ้าเป็น Async จะ run background */
// -----------------------------------------------
