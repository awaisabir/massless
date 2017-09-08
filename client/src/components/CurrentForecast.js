import React from 'react'
import Skycons from 'react-skycons'
import cloudSun from '../assets/cloud-sun.svg'

const CurrentForecastComponent = ({forecast}) => {
  if (Object.keys(forecast).length === 0) {
    return (
      <div>
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
        <h2>       
          Fetching weather ... 
          <img src={cloudSun} alt="cloud" width="25px" height="25px" />
        </h2>
      </div>
    )
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '50px'}}>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            Reverse Geo Location
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <Skycons 
              color='black' 
              icon={formatStringForSkycons(forecast.currently.icon)} 
              autoplay={true}/>
            <hr/>
            <small>
              <h1>{Math.ceil(forecast.currently.apparentTemperature)}&deg;C</h1>
              <strong>Precip: </strong> {forecast.currently.precipProbability*100}% <br/>                                
              <strong>Humidity: </strong>{Math.round(forecast.currently.humidity*100)}% <br/>                                
              <strong>Wind: </strong>{forecast.currently.windSpeed} km/h <br/>
              <strong>UV Index: </strong>{forecast.currently.uvIndex} <br/>                                                             
            </small>
            <hr/>
          </div>
        </div>
      </div>
    </div>
  )
}

const formatStringForSkycons = string => {
  let newString = string.replace(/-/g, "_")
  console.log(newString)
  return newString.toUpperCase()
}

export default CurrentForecastComponent