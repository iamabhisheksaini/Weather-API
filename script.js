const apiKey = "7ca1186bd042b17aacb26ef44523478c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector('.city-input');
const searchBtn = document.querySelector('.search-btn');
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
     if (data.weather[0].main == "Clouds"){
      weatherIcon.src = "images/clouds.png";

     }
     else if(data.weather[0].main == "clear"){
      weatherIcon.src = " images/clear.png";
     }
     

     else if(data.weather[0].main == "Rain"){
      weatherIcon.src = " images/rain.png";
     }
    
     else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = " images/drizzle.png";
     }
     
     else if(data.weather[0].main == "Mist"){
      weatherIcon.src = " images/mist.png";
     }

      

     document.querySelector(".weather").style.display = "block";
  
  
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

searchBtn.addEventListener("click", () => {
  const city = searchInput.value.trim();
  if (city) {
    checkWeather(city);
  } else {
    console.log("Please enter a city name.");
  }
});
