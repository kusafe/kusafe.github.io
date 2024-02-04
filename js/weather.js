const weather = document.querySelector(".weather span:first-child");
const city = document.querySelector(".weather span:last-child");
const API_KEY = "6c8321b650940d99b5bbf688a0d7be9e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}  ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
