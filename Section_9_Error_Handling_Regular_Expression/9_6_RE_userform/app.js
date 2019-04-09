// ถ้าคลิกออกมานอกกล่องข้อความ (blur) ให้ valid ข้อความเลย
document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('zipcode').addEventListener('blur',validateZip);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('phone').addEventListener('blur',validatePhone);


// Valid function
function validateName () {
  const name = document.getElementById('name');
  // กำหนดให้เป็น charactor มากกว่า 2 แต่ ไม่เกิน 10 ตัวอักษร
  const re = /^[a-zA-Z]{2,10}$/;
  if(!re.test(name.value)) {
    // ถ้าไม่ตรงตาม RE ใส่ className ="is-invalid" ให้กับ input
    name.classList.add('is-invalid');
    if(name.value === '') {
      name.classList.remove('is-invalid');
    }
  } else {
    // ถ้าผิด
    name.classList.remove('is-invalid');
    // ถ้าถูก
    name.classList.add('is-valid');
  }
}
function validateZip () {
  const zipcode = document.getElementById('zipcode');
  const re = /^[0-9]{5}$/;
  if(!re.test(zipcode.value)) {
    zipcode.classList.add('is-invalid');
    if(zipcode.value === '') {
      zipcode.classList.remove('is-invalid');
    }
  } else {
    // ถ้าผิด
    zipcode.classList.remove('is-invalid');
    // ถ้าถูก
    zipcode.classList.add('is-valid');
  }
}
function validateEmail () {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.+([a-zA-Z]{2,5})$/;
  // เพิ่ม -, กับ . ด้วย escape character
  // มี 3 group อันแรกใช้ตัวเลข ตัวอักษร และคำพิเศษ เช่น -,_,. ได้
  // group 2 หลัง @ เหมือนกันกับอันแรก
  // มีจุด (.) หลัง escape
  // group 3 คือตัวอักษร ไม่มีตัวเลข จำกัด 2-5  ตัว
  if(!re.test(email.value)) {
    email.classList.add('is-invalid');
    if(email.value === '') {
      email.classList.remove('is-invalid');
    }
  } else {
    // ถ้าผิด
    email.classList.remove('is-invalid');
    // ถ้าถูก
    email.classList.add('is-valid');
  }
}
function validatePhone () {
  const phone = document.getElementById('phone');
  const re = /^\(?[0]\d{2}\)?[-. ]?\d{3}[-. ]?\d{2,4}$/;
  if(!re.test(phone.value)) {
    phone.classList.add('is-invalid');
    if(phone.value === '') {
      // กรณีมันเป็นค่าว่างๆ
      phone.classList.remove('is-invalid');
    }
  } else {
    phone.classList.remove('is-invalid');

    // เพิ่มกล่องเขียว
    phone.classList.add('is-valid');

    // const input = document.querySelector('input#phone');
    // const form = document.querySelector('form').lastElementChild.previousElementSibling;
    // const div = document.createElement('div');
    // div.className = 'valid-feedback';
    // div.appendChild(document.createTextNode('Look Good'));
    // form.appendChild(div);

  }
}