// Synchronous vs Asynchronous


// * Callback function
// function pass in a parameter to another function ran inside function body
// เป็น asychronous function 
// EX 1
// customers.foreEach(function(customer) {
//   console.log(customer);
// });
// EX 2
// setTimeout(function() {
//   console.log('ABC');
// },2000);

//  -------------------------------------

// * Synchronous : Code ทำงานได้ทีละอย่าง getPosts เร็วกว่า createPost ทำให้หน้าจอไม่แสดง Post Three

const posts = [
  {title : 'Post One', body: 'This is post one'},
  {title : 'Post Two', body: 'This is post two'}
];
/* 
function createPost(post) {
  // สร้าง  post ใหม่
  setTimeout(function(){
    // ในนี้เรียก callback function
    posts.push(post);
  },2000);
}

function getPosts() {
  setTimeout(function(){

    let output = '';

    posts.forEach(function(post){
      output += `<li>${post.title}</li>`
    });

    document.body.innerHTML = output;

  },5000); // getPosts เร็วกว่า createPost ทำให้มองไม่เห็น post three ลองปรับเวลา หรือลองใช้ callback function
}

// สร้าง new post (สมมติมาจาก backend)
createPost(
  {title : 'Post Three', body: 'This is post three'}
);

// แสดง posts
getPosts();
 */
//  -------------------------------------
// * Asynchronous : callback function เรียกกลับมาแสดง (cb)

function createPost(post,callback) {
  setTimeout(function(){
    posts.push(post);
    callback();
  },2000);
}

function getPosts() {
  setTimeout(function(){

    let output = '';

    posts.forEach(function(post){
      output += `<li>${post.title}</li>`
    });

    document.body.innerHTML = output;

  },1000); 
}

// * เรียก getPosts ผ่าน callback (line 58,66)
createPost({title : 'Post Three', body: 'This is post three'}, getPosts);

// getPosts();
// จะทำให้ สร้าง post ไว้ก่อนแล้ว ถึงจะมา getPosts ทีหลัง (จากตัวอย่างจะแสดงที่วินาทีที่ 4)
