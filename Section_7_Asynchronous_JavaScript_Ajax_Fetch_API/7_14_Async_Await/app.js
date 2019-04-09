// EX 1
/*
async function myFunc() {
  // ใส่ asyn เข้าไปได้คล้ายๆ  fetch กับ .then(res.json()) รวมบรรทัดกัน คือ return Promise object ที่มี resolve อยู่แล้ว เอาไปใช้ได้เลย
  // return 'Hello';

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 2000);
  });

  const res = await promise; // Wait until promise is resolved
  // * await รอคอย promise จะทำงานได้หลังจากผ่าน setTimeout 2 วิ

  return res;
}

myFunc()
  .then(res => console.log(res));
  // ได้ค่า Promise object (resolve) ก้เลยใช้ .then ต่อได้
 */

///////////////////////////////////////////////////////

//  EX2
/* 
async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
  });

  const error = true;

  if (!error) {
    const res = await promise; // Wait until promise is resolved
    return res;
  } else {
    await Promise.reject(new Error('Something went wrong'));
  }
}

myFunc()
  .then(res => console.log(res))
  .catch(err => console.log(err));
   */

///////////////////////////////////////////////////////
async function getUsers() {
  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // ได้ Response object

  // Only proceed once its resolved
  const data = await response.json();
  // ได้ resolve และส่งค่าที่ได้รับมาเป็น json

  // only proceed once second promise is resolve
  return data;
  // เป็น resolve ของ Promise ที่มาจาก Async
}

getUsers()
  .then(users => console.log(users));
  // * NOTE เรียกใช้ data เลยไม่ได้ เพราะค่าต่างๆ อยู่ใน promise จะต้องเรียกค่า resolve ออกมาที่ .then

  // return data คือค่า resolve ของ await

  // * await จะใช้ได้เฉพาะใน async

  // * async จะ return ค่า Promise object เสมอ
