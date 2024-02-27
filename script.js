const apiKey = "7ca1186bd042b17aacb26ef44523478c";
const apiUrl = " https://api.openweathermap.org/data/2.5/weather?unitx=metric&q=";


async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   
  var data = await response .json();


   console.log(data);

   document.querySelector(".city"). innerHTML= data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C"
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
   
  }












