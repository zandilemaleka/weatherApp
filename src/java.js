function showTemperature(response){

let temperatureElement = document.querySelector("#weather-value");
let temperature = response.data.temperature.current;
let cityElement = document.querySelector("#city-name");
cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML = Math.round(temperature);
    


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