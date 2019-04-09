// State Pattern จะมี behevier นอกเหนือจาก type ทั้งหมด
// State manager ใช้ใน Redux เป็น state ที่บอกว่าถ้าเปลี่ยนตรงนี้ แล้วจะเปลี่ยนอะไร
// จะเปลี่ยนหน้า แต่ไม่ reload page ใหม่
// https://www.youtube.com/watch?v=N12L5D78MAA&list=PLrhzvIcii6GNjpARdnO4ueTUAVR9eMBpc&index=17

const PageState = function () {
  let currentState = new homeState();
  // ! this คือ instance ที่กำลังจะสร้าง

  this.init = function () {
    // เมื่อเรียก init() ก็จะเปลี่ยน currentState เป็นเริ่มต้นใหม่ เป็น function homeState
    this.change(new homeState);
  }

  this.change = function (state) {
    currentState = state;
    // เมื่อเปลี่ยน พวก state ของเพจต่างๆ ให้เท่ากับ currentState
  }
};

////////////////////////////////////////////////////////////
// Home State (หน้า home)
const homeState = function (page) {
  // อยากจะเปลี่ยนแปลง content ใน id heading ใน state ต่างๆ
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  `;
};

// About State
const aboutState = function (page) {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <p>This is the about page</p>
  `;
};

// Contact State
const contactState = function (page) {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
};

/////

// Instantiate pageState (สร้าง instance)
const page = new PageState();

// Init the first state
page.init();
// ได้หน้า home เพราะเราสั่งไว้แบบนั้น (line 20)

// UI Vars คือใส่ pageState ไว้ในแต่ละ link เพื่อสร้าง Init first State แต่ละลิงค์
const home = document.getElementById('home'),
  about = document.getElementById('about'),
  contact = document.getElementById('contact');


// Add event เมื่อกดไปที่ลิงค์ ให้เรียก function page.change
// home
home.addEventListener('click', (e) => {
  page.change(homeState); // ใช้ new homeState เพราะว่าถ้าเป็น homeState เฉยๆ จะไม่ถูก instantiate จะ change state ไม่ได้
  // คลิกที่ home จะเปลี่ยน stae

  e.preventDefault();
});

// about
about.addEventListener('click', (e) => {
  page.change(new aboutState);

  e.preventDefault();
});

contact.addEventListener('click', (e) => {
  page.change(new contactState);

  e.preventDefault();
});