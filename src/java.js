function showTemperature(response){

let temperatureElement = document.querySelector("#weather-value");
let temperature = response.data.temperature.current;
let cityElement = document.querySelector("#city-name");
cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML = Math.round(temperature);
    
let descriptionElement = document.querySelector("#weather-condition");
descriptionElement.innerHTML = response.data.condition.description;
let humidityElement = document.querySelector("#humidity")
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
let windElement = document.querySelector("#wind");
windElement.innerHTML = `${response.data.wind.speed}km/h`;
let timeElement = document.querySelector("#week-day");
let date = new Date(response.data.time * 1000);
timeElement.innerHTML = formatDate(date);
}

function formatDate(date) {


let minutes = date.getMinutes();
let hours = date.getHours();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];
if (minutes < 10) {
    minutes = `0${minutes}`;
}
return `${day} ${hours}:${minutes},`;
}

function searchCity(city) {
let apiKey = "05b1af1a7feb6t6o414b06b73f1569ed";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);

searchCity("Polokwane");