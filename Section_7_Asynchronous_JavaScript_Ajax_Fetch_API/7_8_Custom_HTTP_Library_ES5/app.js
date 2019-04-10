// ใช้งาน easyHttp.js

const http = new easyHTTP;
//--------------------------------------------------------
//* Get Posts

http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
  // รับค่า callback function ถ้าไม่มีจะขึ้น undefined เพราะว่า post ดึงมาก่อนที่ onload จะ return ค่ากลับมา
  // callback = function(post) {
  // console.log(post)  // post คือ self.http.responseText
  // }

  // Check ว่ามี error ผ่าน err มั้ย
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});


//* Get Single post
/* 
http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
 */
//--------------------------------------------------------

//* POST DATA

const data = {
  // ไม่ต้องมี id เพราะจะ run จาก backend
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create Post
/* 
http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
 */
//--------------------------------------------------------

// * PUT DATA (อัพเดท data ที่ id = 6) set ที่ url
/*
http.put('https://jsonplaceholder.typicode.com/posts/6', data, function (err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
 */
//--------------------------------------------------------

// * DELETE DATA ผ่าน id
/* 
http.delete('https://jsonplaceholder.typicode.com/posts/4', function (err, posts) {
  // Check ว่ามี error ผ่าน err มั้ย
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});
 */