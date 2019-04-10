// Fetch new standard ES6 ดึงค่าจาก API

//* GET TEXT
document.getElementById('button1').addEventListener('click', getText);

function getText() {
  fetch('test.txt')
    // fetch return ของ Promises
    .then(res => {
      return res.text();
      // res เฉยๆ จะได้ object Response เอา prototype หรือ method .text() มาใช้ ก็จะได้ Promise object ที่มี resolve 
      //** */ return คือค่า resolve ของ promise
    })
    .then(data => {
      // function(data) รับค่า resolve มา
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(error => {
      console.log(error);
    });
  // กรณีมี error
}

//* GET JSON
document.getElementById('button2').addEventListener('click', getJSON);

function getJSON() {
  fetch('posts.json')
    .then(function (res) {
      return res.json();
      // ** อย่าลืมวงเล็บ ()
    })
    .then(function (data) {
      console.log(data);
      let output = '';
      data.forEach(function (post) {
        // ** จดๆ  append ไปหน้าจอ
        output += `<li>${post.title}</li>`;
      });

      document.getElementById('output').innerHTML = output;
    })
}

// GET API External
document.getElementById('button3').addEventListener('click', getAPI);

function getAPI() {
  fetch('https://api.github.com/users')
    .then(res => {
      // ใช้ => แทน function(res)
      // รับค่า resolve ของ Promise ได้จาก fetch
      return res.json();
      // ** อย่าลืมวงเล็บ ()
    })
    .then(users => {
      // รับ resolve มา
      console.log(users);
      let output = '';
      users.forEach(user => {
        // ** จดๆ  append ไปหน้าจอ
        output += `<li>${user.login}</li>`;
        // เอา key มาจาก api ของ github
      });

      document.getElementById('output').innerHTML = output;
    })
}
