/** Library for making HTTP requests (fetch)
 * @version 2.0.0
 * @author Teeruch
 * @license MIT
 **/

class EasyHTTP {
  // ไม่ต้องใช้ constructor xhr = XMLHttprequest เพราะว่าจะใช้ fecth

  //* Makke an HTTP GET Request
  get(url) {
    return new Promise((resolve, reject) => {
      // มี Promise เพราะทำงานแบบ async รอ data จาก server ก่อนถึง fetch
      fetch(url)
        // รับค่า resolve มาแล้ว
        .then(res => res.json()) // ส่ง res.json ให้ data
        .then(data => resolve(data)) // ส่งออกจอ
        .catch(err => reject(err));
    })
  }

  //* Make an HTTP POST
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        // 
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
        // ส่งข้อมูลขึ้น server
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
  }

  // * Make an HTTP PUT Request
  put(url, data) {
    // เหมือน POST อย่าลืมเปลี่ยน method
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
  }

  // * Make an HTTP DELETE Request
  delete(url) {
    // ตัด DATA ออก
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(() => resolve('Resource Deleted...')) // ลบแล้วก็ empty string
        .catch(err => reject(err));
    })
  }
}

