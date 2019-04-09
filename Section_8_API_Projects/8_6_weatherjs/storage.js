class Storage {
  constructor() {
    this.city;
    this.countryCode;
    this.defaultCity = 'Phitsanulok';
    this.defaultCountryCode = 'TH';
  }

  getLocationData() {
    if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
      //* ถ้าว่างให้ใส่ default ที่เราตั้งไว้ ทำทั้ง city กับ country เลย
    } else {
      this.city = localStorage.getItem('city')
    }

    if(localStorage.getItem('countryCode') === null) {
      this.countryCode = this.defaultcountryCode;
    } else {
      this.countryCode = localStorage.getItem('countryCode')
    }

    return {
      // เอาไปใช้งานใน app.js
      city : this.city,
      countryCode : this.countryCode
    }
  }

  setLocationData(city, countryCode) {
    // city กับ country เป็น string และจะเก็บค่าเพียงค่าเดียว (ปกติจะดึงกลับมาใช้หลายๆ ค่า) เลยไม่ต้อง stringify เพิ่มข้อมูลเข้าไป
    localStorage.setItem('city',city);
    localStorage.setItem('countryCode',countryCode);
  }
}