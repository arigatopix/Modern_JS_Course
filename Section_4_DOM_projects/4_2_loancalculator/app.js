// Listen for submit
document.getElementById('loan-form').addEventListener('submit',function(e) {
  // ถ้ากดแล้วให้แสดง loading หลังจาก 3 วิ ให้แสดง results

  // Show loading // style อย่าลืม single qoutes 'block' 
  document.getElementById('loading').style.display = 'block';
  
  // Hide results
  document.getElementById('results').style.display = 'none';
  
  // ถ้าผ่านไป 2 วิ ให้เข้า calculateResults
  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

document.getElementById('loan-form').addEventListener('reset',function(e){
  document.getElementById('results').style.display = 'none';
});


// Calculate Results
function calculateResults(e) {

  // กำหนด variable รับค่าจาก UI พวกค่า input (อาจจะตั้งชื่อ UIamount ก็ได้ จะได้รู้ว่ามาจาก UI)
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const mountlyPayment = document.getElementById('mountly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value); // เงินต้น
  const calculatedInterest = parseFloat(interest.value) / 100;  // ดอกต่อเดือน
  const calculatePayment = parseFloat(years.value) * 12; // ดอกเบี้ยต่อเดือน

  // ** Compute mountly payment
  // คิดดอกเบี้ย
  const x = Math.pow(1+calculatedInterest,years.value); // ดอกทบต้น (1+ดอก)^ปี 
  // คิดเงินต้น พร้อมดอกเบี้ย แต่ละเดือน
  const mountly = (principal*(x))/12;

  // เช็คว่า mountly เป็น number มั้ย ถ้าใช่จะได้คำนวณ
  if (isFinite(mountly) && mountly >= 0) {
    // * กำหนดค่า mountlyPayment.value เป็นทศนิยม 2 ตำแหน่ง จากค่าคำนวณ
    mountlyPayment.value = mountly.toFixed(2);
    totalPayment.value = (mountly*12).toFixed(2);
    totalInterest.value = (totalPayment.value - principal).toFixed(2);

    // Hide loading  หลังจากคำนวณเสร็จ
    document.getElementById('loading').style.display = 'none';

    // Show results
    document.getElementById('results').style.display = 'block';

  } else {
    // แสดง Alert ERROR ถ้าใส่ข้อมูลผิด
    showError('Please check your numbers');
  }
  
}

// Show ERROR
function showError(error) {
  // จะสร้างกล่องข้อความเตือน เหนือ h1 หมายถึงสร้าง tag element
  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Create div
  const errorDiv = document.createElement('div');

  // Add Class
  errorDiv.className = 'alert alert-danger'; // ตั้ง class ตาม bootstrap 

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // เพิ่ม child ของ .card เหนือ .heading insertBefore()
  card.insertBefore(errorDiv, heading);

  // Clear error หลังจากผ่านไป 3 second ใช้ window method setTimeout(todo,millisecond);
  setTimeout(clearError, 3000)

  // Hide loading กรณีคำนวณผิด
  document.getElementById('loading').style.display = 'none';

  // Hide results
  document.getElementById('results').style.display = 'none';
}

// Clear error function ให้ลบ alert 
function clearError() {
  document.querySelector('.alert').remove();
}