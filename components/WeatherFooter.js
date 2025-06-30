import React from 'react'
import WeatherIcon from './WeatherIcons'

const WeatherFooter = ({ weather }) => {
  if (!weather || !weather.main || !weather.weather) return null

  const temp = Math.round(weather.main.temp)
  const city = weather.name
  const condition = weather.weather[0].main.toLowerCase()

  const date = new Date().toLocaleString('en-UK', {
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    day: 'numeric',
    month: 'short',
    year: '2-digit',
  })

  console.log(date)
  return (
    <div className="box absolute bottom-20 w-96 right-0 md:left-48 flex items-center gap-2 md:gap-14 text-gray-200 ">
      {/* Temperature */}
      <div className="text-6xl flex items-center">
        {temp}
        <img src="/circle.png" alt="degree" width={20} className="relative bottom-3" />
      </div>

      {/* City and Time */}
      <div className="flex flex-col text-gray-400 md:text-white w-20">
        <div className="text-3xl font-semibold">{city}</div>
        <div className="text-xl">{date}</div>
      </div>

      {/* Weather Icon and Condition */}
      <div className="flex flex-col text-gray-400 md:text-white items-center">
        <WeatherIcon condition={condition} size={70} />
        <div className="capitalize text-3xl">{condition}</div>
      </div>

    </div>
  )
}

export default WeatherFooter


