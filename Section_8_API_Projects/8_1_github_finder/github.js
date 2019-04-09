class Github {
  constructor() {
    // เอา client id มาใส่ เพื่อเรียก api key (60 times/hr)
    this.client_id = 'b01e207565f4682d853d';
    this.client_secret = '94c156761b3cae4b46a8155016e5058845e6dff3';

    // limit ให้แสดง repos แค่ 5 รายการ
    this.repos_count = 5; 
    // sort_by ให้อันล่าสุดขึ้นอันแรก
    this.repos_sort = 'created : asc'; // เป็น url string format
  }

  // สร้าง 2 function คือ get user กับ get repos
  async getUser(user) {
    // ใช้ async เพื่อ fetch api
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    // เพิ่ม client_id กับ client_secret โดยใช้ query string

    // lastest repos
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&?client_secret=${this.client_secret}`);

    const profile = await profileResponse.json(); //profileData
    
    // repos response data จะมีข้อมูล id ชื่อเต็มต่างๆ
    const repos = await repoResponse.json(); 

    return {
      profile,
      repos
      // ให้ return object  เพราะอยากได้ profile กับ repos ของ user นั้นด้วย
      // profile : profileData
      // ES6+ ใช้แค่นี้ได้เหมือนกับ profile : profile (profileData)
      // repos : respo
    }
  }
}