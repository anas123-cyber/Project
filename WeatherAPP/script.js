const apiKey = "2ca009bb2a4877e9e34f43d6c11e331f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const temp = document.querySelector(".temp");

const city = document.querySelector(".city");

const humidity = document.querySelector(".humidity");

const wind = document.querySelector(".wind");

const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");

async function checkWeather(city1){
    const response = await fetch(apiUrl + city1 + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    console.log(city1);

    city.innerText = data.name;
    
    temp.innerHTML = Math.floor(data.main.temp)  + `°C`;

    humidity.innerHTML = data.main.humidity + `%`;

    wind.innerHTML = data.wind.speed + ` km/hr`;
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
