const apiKey = "e0704122034297389b89539da9d7681e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".country").innerHTML = data.sys.country;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }
    if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png"
    }

    document.querySelector(".weather").style.display ="block";
    document.querySelector(".error").style.display ="none";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
    
})  

const input = document.getElementById("city");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});