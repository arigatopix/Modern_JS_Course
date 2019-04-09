// Init GitHub
const github = new Github();
// ใช้ parenthesis ตลอดจะดีกว่า แนะนำ เพราะว่า precedence () สูงกว่า

// Init UI
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  // get input text รับค่าจาก keyboard
  const userText = e.target.value;

  if(userText !== '') {
    // call GitHup API
    // Make http call จากไฟล์ github.js อย่าลืมเรียก class 
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // Show Alert (เดี๋ยวจะใช้จาก ui.js)
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // Show Profile
          ui.showProfile(data.profile);
          // Show repos
          ui.showRepos(data.repos); //repos จาก github.js
        }
      })

  } else {
    // Clear profile ถ้าไม่เจอ clear หน้าจอให้ไม่แสดงอะไรเลย 
    ui.clearProfile();
  }
});