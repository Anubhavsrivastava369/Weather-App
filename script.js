const btn = document.querySelector('.btn');
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=2b7ec7e80fe12d2f31abffee5158c2db&units=metric";
const input_box = document.querySelector('.input_box');
const temp = document.querySelector('.temp');
const city = document.querySelector('.city');
const humdata = document.querySelector('.humdata');
const windData = document.querySelector('.windData');
const weatherImg = document.querySelector('#photo');

async function checkTemp() {


    const response = await fetch(apiUrl + `&q=${input_box.value}`);

    if(response.status == 404){
        alert("Invalid City name..");
        return;    
    }
    var data = await response.json();

    if (data.weather[0].main === "Clouds"){
        weatherImg.src = "images/clouds.png";
    }
    else if (data.weather[0].main === "Clear"){
        weatherImg.src = "images/clear.png";
    }
    else if (data.weather[0].main === "Rain"){
        weatherImg.src = "images/rain.png";
    }
    else if (data.weather[0].main === "Drizzle"){
        weatherImg.src = "images/drizzle.png";
    }
    else if (data.weather[0].main === "Mist"){        weatherImg.src = "images/mist.png";
    }
    else if (data.weather[0].main === "Snow"){        weatherImg.src = "images/snow.png";
    }

    city.innerHTML = data.name;
    temp.innerHTML = Math.floor(data.main.temp) + '°C';
    humdata.innerHTML = data.main.humidity + '%';
    windData.innerHTML = data.wind.speed + ' km/hr'


}
btn.addEventListener('click', checkTemp);
input_box.addEventListener('keydown', function (event) {
    if (event.key == 'Enter')
        checkTemp();
});