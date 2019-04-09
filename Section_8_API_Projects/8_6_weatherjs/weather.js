class Weather {
  constructor(city, countryCode) {
    // กำหนดค่า default ให้ใส่ค่าตอนเรียกใช้ class
    this.apiKey = '64a0e84f278f7737850572f11dbdb287';
    this.city = city;
    this.countryCode = countryCode;
    this.unit ='metric';
  }
  
  // Fetch weather form API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apiKey}&units=metric`);

    const responseData = await response.json();

    return responseData;
  }

  // Option Change location
  changLocation(city, countryCode){
    this.city = city;
    this.countryCode = countryCode;
  }
}

