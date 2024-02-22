const apikey ="4ea1078532f9c10b8b4d00a247ce6caf";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
async function checkWeather(){
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);
    var data = await response.json();


    console.log(data);

document.querySelector(".city").innerHTML= data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C"
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

