import React from 'react'

export default function WeatherCard(props) {
  const {city, temperature, weather, humidity, wind} = props
  return (
    <div className='border-2 border-black rounded-md p-8 min-w-[20em]'>
      <div className=''>

        <div className='py-2 flex justify-between   '>
          <div>
            {city}
          </div>
          <div>
            {/* place2 */}
          </div>
        </div>
        <div className='py-2 pb-12 text-3xl '>
          <div>{temperature}</div>
          <div>{weather}</div>
        </div>
        
        <div className='py-1'>
          {humidity}
        </div>
        <div className='py-1'>
          {wind}
        </div>

      </div>
    </div>
  )
}
