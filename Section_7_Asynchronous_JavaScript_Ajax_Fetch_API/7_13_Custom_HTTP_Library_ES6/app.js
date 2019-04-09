const http = new EasyHTTP;

//* Get users
/*  ใช้ไม่ได้ จะขึ้น undefined เพราะ get ไวเกินไป server ยังไม่ตอบกลับมา จะต้องทำ code ให้ asynchronous (Promise)
const get = http.get('https://api.github.com/users')
console.log(get);
 */

/* 
http.get('https://api.github.com/users')
  .then(data => console.log(data))
  // รับค่า parameter data จาก resolve ของ Promise function get
  .catch(error => console.log(error));
   */
// =====================================================================

//* User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// Create Post
/*
http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(error => console.log(error));
 */
// =====================================================================

// Update User
/*
http.put('https://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data))
  .catch(error => console.log(error));
 */
// =====================================================================

// Delete User
/*
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(error => console.log(error));
 */









//  -- other version --

//  http.get('https://api.github.com/users')
//   .then(data => {
//     let output = '';
//     data.forEach(user => {
//       output += `
//       <ul>
//         <li>${user.login}</li>
//       </ul>`
//     });
//     document.querySelector('.output').innerHTML = output;
//   })
//   // รับค่า parameter data จาก resolve ของ Promise function get
//   .catch(error => console.log(error));