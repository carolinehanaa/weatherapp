import { prod, dev } from "./environment.js";

let apiKey = '&appid=';

if(prod.isLive == true)
{
    apiKey += prod.apiKey;
}else{
    apiKey += dev.apiKey;
}



async function FetchWeather(city) {
  const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + apiKey)
    return await response.json();
}



async function FetchForecast(city) {
  const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + apiKey)
  return await response.json();
  }

  export { FetchWeather, FetchForecast };