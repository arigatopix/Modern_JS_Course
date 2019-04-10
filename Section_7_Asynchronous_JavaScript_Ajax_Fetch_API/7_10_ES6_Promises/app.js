// ใช้ Promises แทน callback function ได้ผลเหมือนกัน
// เป็นมาตรฐานใหม่ของ ES6

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    // Promise มี resolve ถ้าทำสำเร็จจะตอบผ่าน resolve (that the operation completed successfully.)
    // reject คือ error
    setTimeout(function () {
      posts.push(post);
      resolve();
      // สร้าง post เสร็จ ก็ไปที่ .then getPosts
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {

    let output = '';

    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`
    });

    document.body.innerHTML = output;

  }, 1000);
}

// createPost จากนั้น getPosts
createPost({ title: 'Post Three', body: 'This is post three' }).then(getPosts);
// .then จะทำเมื่อเจอ Promise ส่งค่า resolve


// .then() เป็น method ของ Promises คือหลังจาก createPost สำเร็จ จากนั้นทำ getPosts 
