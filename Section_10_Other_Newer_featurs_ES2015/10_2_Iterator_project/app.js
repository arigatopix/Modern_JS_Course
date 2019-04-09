// สร้าง API แบบ offline
const data = [
  {
    name : 'John Doe',
    age : 32,
    gender : 'male',
    lookingfor : 'female',
    location : 'Boston MA',
    image : 'https://randomuser.me/api/portraits/men/65.jpg'
  },
  {
    name : 'Jane Smith',
    age : 32,
    gender : 'female',
    lookingfor : 'male',
    location : 'Phuket TH',
    image : 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    name : 'William Johnson',
    age : 32,
    gender : 'male',
    lookingfor : 'female',
    location : 'Lynn MA',
    image : 'https://randomuser.me/api/portraits/men/99.jpg'
  }
];

// สร้าง variable ใช้งาน iterators ดึง data api มาแสดง
const profile = profileIterator(data);

// เรียกใช้งาน first profile ไม่ต้องกด next เพื่อเรียก event listener
nextProfile();

// add Next event
document.getElementById('next').addEventListener('click',nextProfile);

function nextProfile() {
  // เรียก Iterators มาใช้
  const currentProfile = profile.next().value

  if(currentProfile !== undefined) {
    //* ใช้ตัว currentProfile เพราะมันจะบอก value, done

    // ดึงข้อมูลจาก data แล้วแสดงใน innerHTML div profileDisplay
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name : ${currentProfile.name}</li>
      <li class="list-group-item">Age : ${currentProfile.age}</li>
      <li class="list-group-item">Preference : ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      <li class="list-group-item">Location : ${currentProfile.location}</li>
    </ul>`;

    // Display image
    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}" class="mx-auto">`;
  } else {
    // ถ้าไม่มี profile แล้วให้ reload page (กลับไปอันที่ 1 ใหม่)
    window.location.reload();
    // จะ reload หน้าเพจทั้งหมด
  }
}

// Profile Iterator
function profileIterator(profile) {
  let nextIndex = 0;

  return {
    next : function() {
      // ต้องมาคู่กับ return value, done false or true
      return nextIndex < profile.length ?
      { value : profile[nextIndex++], done : false } :{ done : true }
    }
  }
}