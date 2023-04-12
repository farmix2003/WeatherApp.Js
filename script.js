const form = document.querySelector("form");
const cityInput = document.querySelector("#city");
const weatherDiv = document.querySelector("#weather");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const apiKey = "66410b8d3cdffe51d804936acc0e64c4";
  const city = cityInput.value.trim();

  if (city.length === 0) {
    alert("Please enter a city name.");
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      const temp = data.main.temp;
      const cityName = data.name;
      const countyName = data.sys.country;
      const maxTemp = data.main.temp_max;
      const minTemp = data.main.temp_min;
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;
      const windSpeed = data.wind.speed;
      console.log(data);

      weatherDiv.innerHTML = `<h4>${cityName}, ${countyName}</h4><img src="http://openweathermap.org/img/wn/${icon}.png" 
      alt="${description}"><p>${temp}°C - ${description}
      <p>Min temp: ${minTemp}</p>
      <p>Max temp: ${maxTemp}</p>
      </p><p>Wind speed: ${windSpeed}/km</h5></p>`;

      cityInput.value = "";
    })
    .catch((error) => {
      console.log(error);
      alert("Sorry, there was an error fetching the weather data.");
    });
});
