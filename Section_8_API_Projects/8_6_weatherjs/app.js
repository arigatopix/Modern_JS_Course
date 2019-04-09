// Init Local Storage (อยู่บนสุด เพราะต้อง load ก่อนใคร)
const storage = new Storage();
// ดึงค่า Local storage ไปใส่ในค่าเริ่มต้น (line 2)
const weatherLocationStorage = storage.getLocationData();

// Init Weather class (ใช้ข้อมูลจาก Local storage)
const weather = new Weather(weatherLocationStorage.city,weatherLocationStorage.CountryCode);

// Init UI
const ui = new UI();

// Get weather on Dom load
document.addEventListener('DOMContentLoaded',getWeather);

// Change location event
document.getElementById('w-change').addEventListener('click',(e) => {
  const city = document.getElementById('city').value;
  const countryCode = document.getElementById('country-code').value;

  // เปลี่ยนสถานที่ดู weather รับค่าจาก input
  weather.changLocation(city, countryCode);

  // Set location in Local Storaage  เก็บลง LS
  storage.setLocationData(city, countryCode);

  // Get and display Weather again ต้อง run function ใหม่เพื่อแสดงผล
  getWeather();

  // Close modal (ใช้ jQuery เพราะ bootstrap ใช้ jQuery)
  $('#locModal').modal('hide');

})


function getWeather() {
  // ให้ run ตอน DOMLoaded
  weather.getWeather()
    .then(results => {
      ui.paint(results)
    })
    .catch(err => console.log(err));
}