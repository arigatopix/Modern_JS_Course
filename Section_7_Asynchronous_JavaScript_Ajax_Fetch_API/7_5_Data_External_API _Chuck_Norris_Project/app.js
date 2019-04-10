document.querySelector('.get-jokes').addEventListener('click',getJokes);


// API แต่ละข้อมูล จะมีโครงสร้างไม่เหมือนกัน ต้องศึกษาก่อน
// copy JSON มาแล้วดูโครงสร้างที่ https://jsonlint.com/ ก็ได้
function getJokes(e) {
  
  const number = document.querySelector('input[type="number"]').value;
  // เลือกเฉพาะ tag input ที่เป็น type="number" (เลือกเหมือน css)

  const xhr = new XMLHttpRequest();

  // number คือจำนวน joke ที่ api ส่งกลับมา
  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);


  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      
      // ต้อง set output ให้เป็นค่าว่างก่อน ไม่งั้นจะขึ้น undefined
      let output = '';

      if(response.type === 'success') {
        // จะเอา value ใน object ของ api มา
        // แล้วก็เอา joke ส่งไปที่ page html
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += `<li>Something went wrong</li>`;
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  };

  xhr.send();
  
  e.preventDefault();
}