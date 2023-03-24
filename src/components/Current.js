import React from 'react'
import { useState, useEffect } from 'react';
import { FetchWeather } from '../service/DataService';
import { FetchForecast } from '../service/DataService';




export default function Current() {
  const [cityName, setCityName] = useState('');
  const [inputField, setInputField] = useState('');
  const [cityTemp, setCityTemp] = useState('');
  const [cityDesc, setCityDesc] = useState('');
  const [countryName, setCountry] = useState('');
  const [forecastDay1, setForecastDay1] = useState('');
  const [forecastDay2, setForecastDay2] = useState('');
  const [forecastDay3, setForecastDay3] = useState('');
  const [forecastDay4, setForecastDay4] = useState('');
  const [forecastDay5, setForecastDay5] = useState('');
  const [forecastDay1Temp, setForecastDay1Temp] = useState('');
  const [forecastDay2Temp, setForecastDay2Temp] = useState('');
  const [forecastDay3Temp, setForecastDay3Temp] = useState('');
  const [forecastDay4Temp, setForecastDay4Temp] = useState('');
  const [forecastDay5Temp, setForecastDay5Temp] = useState('');
  const [currentIcon, setCurrentIcon] = useState('');
  const [day1Icon, setDay1Icon] = useState('');
  const [day2Icon, setDay2Icon] = useState('');
  const [day3Icon, setDay3Icon] = useState('');
  const [day4Icon, setDay4Icon] = useState('');
  const [day5Icon, setDay5Icon] = useState('');

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }

  });



  async function CityData() {


    let myCity = await FetchWeather(inputField);
    let myCityForecast = await FetchForecast(inputField);

    let d1 = myCityForecast.list[0].dt;
    let d2 = myCityForecast.list[8].dt;
    let d3 = myCityForecast.list[16].dt;
    let d4 = myCityForecast.list[24].dt;
    let d5 = myCityForecast.list[32].dt;

    let nextDate1 = new Date(d1 * 1000);
    let nextDate2 = new Date(d2 * 1000);
    let nextDate3 = new Date(d3 * 1000);
    let nextDate4 = new Date(d4 * 1000);
    let nextDate5 = new Date(d5 * 1000);

    console.log(d1);
    console.log(nextDate1.toDateString());

    console.log(myCity);
    console.log(myCityForecast);


    setCityName(myCity.name);
    setCityTemp(myCity.main.temp);
    setCityDesc(myCity.weather[0].description);
    setCountry(myCity.sys.country);
    setForecastDay1(nextDate1.toDateString());
    setForecastDay2(nextDate2.toDateString());
    setForecastDay3(nextDate3.toDateString());
    setForecastDay4(nextDate4.toDateString());
    setForecastDay5(nextDate5.toDateString());
    setForecastDay1Temp(myCityForecast.list[0].main.temp_max)
    setForecastDay2Temp(myCityForecast.list[8].main.temp_max)
    setForecastDay3Temp(myCityForecast.list[16].main.temp_max)
    setForecastDay4Temp(myCityForecast.list[24].main.temp_max)
    setForecastDay5Temp(myCityForecast.list[32].main.temp_max)
    setCurrentIcon(myCity.weather[0].icon)
    setDay1Icon(myCityForecast.list[0].weather[0].icon)
    setDay2Icon(myCityForecast.list[8].weather[0].icon)
    setDay3Icon(myCityForecast.list[16].weather[0].icon)
    setDay4Icon(myCityForecast.list[24].weather[0].icon)
    setDay5Icon(myCityForecast.list[32].weather[0].icon)





  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Caroline's Weather App</a>

          <form className="d-flex search" role="search">
            <input className="form-control me-2" onChange={(e) => {
              setInputField(e.target.value); console.log(inputField)
            }} placeholder="Location" aria-label="Search" />

            <button onClick={CityData} type='button' className="btn bg-light " >Search</button>
          </form>

        </div>
      </nav>

      {/* card for current temp */}

      <div className='top-card'>
        <div className="card mb-3">
          <div className="card-body">
            <p className="card-title"> {cityName} {countryName} </p>

            <p className="card-text desc">{cityDesc} </p>

            <div className='current-img'>

              <img src={`http://openweathermap.org/img/wn/${currentIcon}@2x.png`} />
              <p className="card-text temp text-center">{cityTemp} °</p>
            </div>

            <p className='time-date'>  {date.toLocaleDateString()}</p>
            <p className='time-date'>  {date.toLocaleTimeString()}</p>
            <p className="card-text"><small className="text-muted"></small></p>
          </div>
        </div>
      </div>

      {/* Cards for next five days */}

      <div className='next-five'>
        <div className="row row-cols-1 row-cols-md-5 ">
          <div className="col">
            <div className="card">

              <div className="card-body">
                <p className="card-title">{forecastDay1}</p>
                <p className="card-text temp">{forecastDay1Temp} °</p>
                <div className='five-day-imgs'>

                  <img src={`http://openweathermap.org/img/wn/${day1Icon}@2x.png`} />
                </div>

              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">

              <div className="card-body">
                <p className="card-title">{forecastDay2}</p>
                <p className="card-text temp">{forecastDay2Temp} °</p>
                <div className='five-day-imgs'>
                  <img src={`http://openweathermap.org/img/wn/${day2Icon}@2x.png`} />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">

              <div className="card-body">
                <p className="card-title">{forecastDay3}</p>
                <p className="card-text temp">{forecastDay3Temp} °</p>
                <div className='five-day-imgs'>
                  <img src={`http://openweathermap.org/img/wn/${day3Icon}@2x.png`} />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">

              <div className="card-body">
                <p className="card-title">{forecastDay4}</p>
                <p className="card-text temp">{forecastDay4Temp} °</p>
                <div className='five-day-imgs'>
                  <img src={`http://openweathermap.org/img/wn/${day4Icon}@2x.png`} />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">

              <div className="card-body">
                <p className="card-title">{forecastDay5}</p>
                <p className="card-text temp">{forecastDay5Temp} °</p>
                <div className='five-day-imgs'>
                  <img src={`http://openweathermap.org/img/wn/${day5Icon}@2x.png`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

