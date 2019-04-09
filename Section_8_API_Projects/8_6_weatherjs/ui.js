class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.details = document.getElementById('w-details');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.coord = document.getElementById('w-coord');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.innerHTML = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.string.innerHTML = `${weather.main.temp} Celsius`;
    this.icon.setAttribute('src',`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity : ${weather.main.humidity}`;
    this.pressure.textContent = `Presure : ${weather.main.pressure}`;
    this.coord.textContent = `Lat : ${weather.coord.lat} Long : ${weather.coord.lon}`;
    this.wind.textContent = `Wind : ${weather.wind.speed}`;
  }
}