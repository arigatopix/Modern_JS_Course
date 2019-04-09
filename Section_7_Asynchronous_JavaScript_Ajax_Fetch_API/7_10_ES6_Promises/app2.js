
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    // Promise จะใช้แทน callback function กับโปรแกรม Async จะมีค่า resolve กับ reject
    // resolve คือ ถ้าโปรแกรมมันผ่าน จะส่งค่า resolve กลับมาเพื่อทำอะไรต่อ (.then) ..
    // reject คือ โปรแกรมไม่ผ่าน จะส่งค่ากลับมา (.catch)
    // จะทำให้โปรแกรม ทำอะไรต่อเรียก Promise Chain 

    setTimeout(function () {
      posts.push(post);

      const error = true;

      // ลองเป็น reject

      if (!error) {
        // จะเข้า if เมื่อ true เท่านั้น แต่ !error คือ false
        resolve();
      } else {
        reject('Error : Something went wrong');
      }

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


createPost({ title: 'Post Three', body: 'This is post three' }).then(getPosts).catch(function (err) {
  console.log(err);
});


// .then() เป็น method ของ Promises คือหลังจาก createPost สำเร็จ จากนั้นทำ getPosts 
// .catch() คือจะแสดงค่า error 