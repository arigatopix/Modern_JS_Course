/** Library for making HTTP requests (ASYNC / AWAIT)
 * @version 3.0.0
 * @author Teeruch
 * @license MIT
 **/

class EasyHTTP {

  //* Makke an HTTP GET Request
  async get(url) {
    const response = await fetch(url);
    // ได้ Response object 

    const resData = await response.json();
    // บรรทัดนี้ได้เหมือน .then(res => res.jason())

    return resData;
    // ปกติต้องส่ง .then(data => resolve(data)) แต่ return ในนี้ได้ค่า resolve 
  }

  //* Make an HTTP POST
  async post(url, data) {

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const resData = await response.json();

    return resData;
  }

  // * Make an HTTP PUT Request
  async put(url, data) {

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const resData = await response.json();

    return resData;
  }

  // * Make an HTTP DELETE Request
  async delete(url) {

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
    })

    const resData = await 'Resource Deleted...';

    return resData;
  }
}

