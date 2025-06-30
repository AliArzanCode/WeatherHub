"use client"
import React, { useEffect, useState } from 'react'
import { fetchweather } from '@/DataAction/FetchWeather'
import Link from 'next/link'
const SearchBar = ({setWeather,weather}) => {
  const [city, setCity] = useState('')
 const [error, setError] = useState(null);


 

  const handleSearch = async (e) => {
    e.preventDefault() // Prevent page reload
    if (!city) return
    const data = await fetchweather(city)

    if (data.cod !== 200) {
      setError("City not found")
      setWeather(null)
    } else {
      setError(null)
      setWeather(data)
       console.log(data)
    }
  }

  return (
    <>
    <form onSubmit={handleSearch} className='bg-white/10 md:min-h-screen top-14 overflow-y-scroll md:left-[67%] w-full h-1/3 md:w-1/3 relative backdrop-blur-md rounded-xl border border-white/20 p-6 text-white'>

      <div className='flex items-center   md:gap-4 mb-6'>
        <input
          className='w-full bg-transparent  border-b border-white/40 outline-none px-2 py-2 text-white'
          onChange={(e) => setCity(e.target.value)}
          type="text"
          fill="gray"
          placeholder='Search City'
          value={city}
        />

        <button type='submit'>
          <svg className="cursor-pointer w-6" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
            <path fill="gray" d="M21 3C11.6 3 4 10.6 4 20s7.6 17 17 17c3.7 0 7.1-1.2 9.9-3.2L44.1 46.9l2.8-2.8-13-13c2.6-3 4.1-6.8 4.1-11 0-9.4-7.6-17-17-17zm0 2c8.3 0 15 6.7 15 15s-6.7 15-15 15S6 28.3 6 20 12.7 5 21 5z"/>
          </svg>
        </button>
      </div>

      {error && <div className='text-red-400 mb-4'>{error}</div>}

     

    

      

      <div className='flex flex-col px-5 gap-4 py-7'>
        <div className='font-bold text-xl text-white'>Weather Details</div>

        {weather ? (
          <>
            <div className='text-white text-lg flex flex-col md:flex-row  md:justify-between'>
              Temperature <div>{weather.main.temp}°C</div>
            </div>
            <div className='text-white text-lg flex flex-col md:flex-row  md:justify-between'>
              Condition <div>{weather.weather[0].main}</div>
            </div>
            <div className='text-white text-lg flex flex-col md:flex-row md:justify-between'>
              Humidity <div>{weather.main.humidity}%</div>
            </div>
            <div className='text-white text-lg flex flex-col md:flex-row  md:justify-between'>
              Wind <div>{weather.wind.speed} km/hr</div>
            </div>
          </>
        ) : (
          <div className='text-gray-400 '>Search a city</div>
        )}
      </div>

      <div className='h-0.5 w-full bg-gray-600'></div>
<button className="button-34 md:w-fit md:border-r-4 relative top-5 md:top-28 md:left-36" role="button">
<Link href="/About">About Me</Link>
</button>
    </form>
    </>
  )
}

export default SearchBar