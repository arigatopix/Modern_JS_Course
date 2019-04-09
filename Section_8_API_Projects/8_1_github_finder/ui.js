// สร้าง UI แสดงเมื่อเจอ User
class UI{
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Display profile and UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid md-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block my-2">View Profile</a>
          </div>

          <div class="col-md-9">
            <span class="badge badge-primary mb-3">Public Repos : ${user.public_repos}</span>
            <span class="badge badge-secondary mb-3">Public Gists : ${user.public_gists}</span>
            <span class="badge badge-success mb-3">Followers : ${user.followers}</span>
            <span class="badge badge-info mb-3">Following : ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company : ${user.company}</li>
              <li class="list-group-item">Website/Blog : ${user.blog}</li>
              <li class="list-group-item">Location : ${user.location}</li>
              <li class="list-group-item">Member Since : ${user.created_at}</li>
            </ul>
          </div>

        </div>
      </div>
      
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show repos ทำคล้ายๆเอา customers ออกมาหลายๆ คน
  showRepos(repos) {
    let output = ``;

    // รับค่ามาเป็น json (data ที่ fetch มา)
    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>

            <div class="col-md-6">
              <span class="badge badge-primary mb-3">Starts : ${repo.stargazers_count}</span>
              <span class="badge badge-secondary mb-3">Watchers : ${repo.watchers_count}</span>
              <span class="badge badge-success mb-3">Froks : ${repo.forks_count}</span>            
            </div>
          </div>
        </div>
      `;
    });

    // Output repos (id จาก line 35)
    document.getElementById('repos').innerHTML = output;
  }

  // Clear Profile
  clearProfile() {
    this.profile.innerHTML = ``;
  }

  // Show Alert message , className
  showAlert(message, className) {
    // Clear any remaining alert ถ้ายังมี alert popup ให้ clear อันอื่นออก
    this.clearAlert();

    // Create div
    const div = document.createElement('div');
    // Add className
    div.className = className; //รับมาจาก function call
    // Add textNode
    div.appendChild(document.createTextNode(message));
    // Get Parent เพื่อจะ insert before search card
    const container = document.querySelector('.searchContainer');
    // Get Search Box
    const search = document.querySelector('.search');
    // Inserth Before
    container.insertBefore(div, search);

    // ให้ alert หายไปหลังจาก 3 วิ
    setTimeout(() => {
      this.clearAlert();
    },3000);
  }

  // Clear Alert คือให้แสดง pop up alert ได้แค่อันเดียว
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      // ถ้ายังมีกล่อง alert อยู่ ใน remove อันต่อไปที่กำลังจะขึ่นมา
      document.querySelector('.alert').remove();
    }
  }

}

// NOTE
// avatar_url มาจากข้อมูล githup