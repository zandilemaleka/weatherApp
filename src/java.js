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
let iconElement = document.querySelector("#icon");
iconElement.innerHTML= `<img src="${response.data.condition.icon_url}" class="weather-icon" />`;

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
function displayForecast(){
 
let forecastElement = document.querySelector("#forecast");
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
let forecastHtml = "";
days.forEach(function (day) {         
  forecastHtml = forecastHtml + `<div class="weather-forecast-day">
  <div class="weather-forecast-date">${day}</div>
  <div class="weather-forecast-icon">☁️ </div>
  <div class="weather-forecast-temp">
  <div class="weather-forecast-min-max"><strong>15°</strong></div>
  <div class="weather-forecast-min-max"> 19°</div>
  </div>
  </div>`;   
})
forecastElement.innerHTML = forecastHtml;
};

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);

searchCity("Polokwane");

displayForecast();