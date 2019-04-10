document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object (xhr หรือ xmlHttp = XML Http Request)
  const xhr = new XMLHttpRequest();

  // OPEN method ใน XMLHttpRequest เพื่อเปิด URL  หรือ file
  xhr.open('GET', 'data.txt', true);
  // GET = Read file 
  /* โครงสร้าง open(typeof Request, file, asynchronous หรือเปล่า) */

  // เช็คว่าอยู่ STATE ไหน
  // console.log('READYSTATE', xhr.readyState);

  // OPTIONAL - Used for spinners/loaders (ช่วง STATE 3)
  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState);
  }


  // ต้องการทำอะไรกับ DATA ที่ get มา
  // เช็ค status
  xhr.onload = function () {
    // onload run จะต้องผ่าน STATE 4 อยุ่แล้ว
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
      // this อ้างถึง XHL object
      // console.log(this.responseText);
      // ตอบเป็น plain text ที่มาจากไฟล์ data.txt

      // output to HTML Page ไม่มี reflesh ทุกอย่างเกิดขึ้น behind the scense
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  /* 
  * HTTP STATUS
      200 : "OK"
      403 : "Forbidden" 
      404 : "Not Found" 
  */

  /* 
    * เช็คสถานะของ Process ว่าพร้อมตอบกลับ client รึยัง
      readyState Values
        0: request not initialized 
        1: server connection established
        2: request received 
        3: processing request 
        4: request finished and response is ready 
  */

  // เช็ค status และ เช็คว่า state ว่าพร้อมตอบกลับรึยัง (request finished and response is ready) แบบเก่า
  /* 
  xhr.onreadystatechange = function() {
    // ก่อนจะส่งกลับ client ต้องผ่านทุก state
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200 && this.readyState === 4){
      console.log(this.responseText);
    }
  }
 */

  // ถ้ามีปัญหา ไม่สามารถผ่าน STATE ได้
  xhr.onerror = function () {
    console.log('Request errorr...');
  }

  // ส่งกลับหา client
  xhr.send();

}