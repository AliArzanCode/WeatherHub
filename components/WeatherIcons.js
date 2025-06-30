import React from 'react'

const getIconForCondition = (condition) => {
    console.log("Condition passed to WeatherIcon:", condition)

  switch (condition.toLowerCase()) {
    case 'clear':
      return '/sunshine-icon.png'
    case 'clouds':
      return '/overcast-icon.png'
    case 'rain':
      return '/raining-icon.png'
    case 'snow':
      return '/snow-icon.png'
    case 'drizzle':
      return '/raining-icon.png'
    case 'thunderstorm':
      return '/strom-icon.png'
       case 'mist':
    case 'fog':
    case 'haze':

      return '/foggy-icon.png'
    default:
      return '/sunshine-icon.png'
  }
}

const WeatherIcon = ({ condition, size = 50 }) => {
  const src = getIconForCondition(condition || '')
  return <img src={src} width={size} alt={condition} />
}

export default WeatherIcon
