const http = new EasyHTTP;

// GET Users
/* 
http.get('https://api.github.com/users')
  .then(data => console.log(data))
  .catch(error => console.log(error));
 */
//  =================================================

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
//  =================================================

// Update User
/* 
http.put('https://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data))
  .catch(error => console.log(error));
 */
//  =================================================
// Delete User

http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(error => console.log(error));

