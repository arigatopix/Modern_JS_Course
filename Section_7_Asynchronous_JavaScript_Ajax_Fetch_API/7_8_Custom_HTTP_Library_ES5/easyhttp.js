// easyHttp.js แทน library ลองใช้ ES5 ก่อน
// OPEN > ONLOAD > SEND แล้วดูว่าจะใช้ HTTP METHODS ไหน

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//* Make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
  // callback คือส่งค่ากลับไปหลังจาก API response ข้อมูลกลับมา
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function () {
    // this ใน function คนละอันกับ this ใน easyHTTP.prototype คนละ scope กัน เหมือนกับ function scope กับ windows scope  
    // แก้ด้วย กำหนด this นอก function scope เป็นชื่อซักชื่อ (let self) 
    // หรือแก้ไขด้วย Arrow function (ES6)

    // always check status 
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
      // callback คือส่งค่ากลับหลังจาก get API ให้ function ฝั่ง app.js ไปจัดการต่อ
      // null คือถ้า error
    } else {
      callback('Error : ' + self.http.status);
    }
  }

  this.http.send();
}
//--------------------------------------------------------

// Make an HTTP POST Request : ส่งข้อมูลกลับ SERVER ต้องมี data
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');
  // setRequestHeader ใช้ก่อน send header กับ value น่าจะเฉพาะแต่ละ api

  let self = this;
  this.http.onload = function () {
    // POST ไม่ต้องเชค status เพราะเรา post request ไม่ต้องการรับค่ากลับ
    callback(null, self.http.responseText);
  }

  // ต้องแปลงจาก object เป็น JSON
  this.http.send(JSON.stringify(data));
}
//--------------------------------------------------------

// Make an HTTP PUT Request (update ค่า) คล้ายๆ  POST
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}
//--------------------------------------------------------

// Make an HTTP DELETE Request (คล้ายๆ GET)

easyHTTP.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, 'POST DELETED');
    } else {
      callback('Error : ' + self.http.status);
    }
  }
  this.http.send();
}