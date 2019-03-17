
		

let appId = "c9c90af8b6d81961c7853d08064bfc71";

let units ="Metric";
let searchMethod;
// for zip code and city name 
function getSearchMethod(searchItem) {
	// for city zip code
	if (searchItem.length===5 && Number.parseInt(searchItem) + ""===searchItem){
	  searchMethod = "zip";}

	  // for city name
	  else{
	  	 searchMethod = "q";
	  }
}

function searchWeather(searchItem) {
	getSearchMethod(searchItem);
	fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchItem}&APPID=${appId}&units=${units}`).then(result=>{
		return result.json();
	}).then(result=>{
		init(result);
	})
}
function init(searchFromServer) {

	
	switch(searchFromServer.weather[0].main) {
  case 'Clear':
       document.getElementById('cont').style.backgroundImage='url("img/sunny.jpg")';
  break;
  case 'Haze':
         document.getElementById('cont').style.backgroundImage='url("img/haza.gif")';
  break;
  case 'Smoke':
        document.getElementById('cont').style.backgroundImage='url("img/fog.gif")';
  break;
  case 'Thunderstorm':
        document.getElementById('cont').style.backgroundImage='url("img/cloud.gif")';
  break;
  case 'Drizzle':
       document.getElementById('cont').style.backgroundImage='url("img/slowrain.gif")';
  break;
  case 'Rain':
       document.getElementById('cont').style.backgroundImage='url("img/rain.gif")';
  break;
  case 'Clouds':
       document.getElementById('cont').style.backgroundImage='url("img/cloud.gif")';
       document.getElementById('cityName').style.color="white";
       document.getElementById('descriptionHeader').style.color="white";
       document.getElementById('temp').style.color="white";
       document.getElementById('sunrise').style.color="white";
       document.getElementById('sunset').style.color="white";
       document.getElementById('speed').style.color="white";
       document.getElementById('pressure').style.color="white";
       document.getElementById('humidity').style.color="white";
       document.getElementById('maxTemp').style.color="white";
       document.getElementById('minTemp').style.color="white";
  break;
  
   default:
}
console.log(searchFromServer);
let cityName = document.getElementById('cityName');
let weatherIcon = document.getElementById('weatherIcon');
let descriptionHeader = document.getElementById('descriptionHeader');
let temp = document.getElementById('temp');
let country = document.getElementById('country');
let sunrise = document.getElementById('sunrise');
let sunset = document.getElementById('sunset');
let speed = document.getElementById('speed');
let pressure = document.getElementById('pressure');
let humidity = document.getElementById('humidity');
let maxTemp = document.getElementById('maxTemp');
let minTemp =document.getElementById('minTemp');
cityName.innerText= searchFromServer.name;
descriptionHeader.innerHTML= searchFromServer.weather[0].description;
weatherIcon.src = `http://openweathermap.org/img/w/${searchFromServer.weather[0].icon}.png`;
temp.innerHTML = Math.floor(searchFromServer.main.temp) + '&#176';
country.innerHTML = searchFromServer.sys.country;
let sunRiseCostum = new Date(searchFromServer.sys.sunrise*1000);
sunrise.innerText = sunRiseCostum.toLocaleTimeString();
let sunSetCostum = new Date(searchFromServer.sys.sunset*1000);
sunset.innerText = sunSetCostum.toLocaleTimeString();
speed.innerText = searchFromServer.wind.speed + 'm/s';
pressure.innerHTML = searchFromServer.main.pressure + '<sub>pH</sub>';
humidity.innerText = searchFromServer.main.humidity+"%";
maxTemp.innerHTML = Math.floor(searchFromServer.main.temp_max+7) + '&#176';
minTemp.innerHTML = Math.floor(searchFromServer.main.temp_min-3) + '&#176';

}





window.onload= searchWeather("delhi");

document.getElementById('searchbtn').addEventListener('click',()=>{
let searchItem = document.getElementById('searchCity').value;
	
   
	if (searchItem) {
		searchWeather(searchItem);
	}
	
})
let d = new Date();
 	let Time = d.toLocaleTimeString();
 	document.getElementById('time').innerHTML= Time;

// // for time
 let x = setInterval(function() {
 	let d = new Date();
 	let Time = d.toLocaleTimeString();
 	document.getElementById('time1').innerHTML= Time;
  },1000);