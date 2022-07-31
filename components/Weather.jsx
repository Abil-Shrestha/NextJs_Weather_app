import React from 'react'
import Image from 'next/image';

const Weather = ({data, city}) => {
  console.log(data);
    return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-full m-auto p-4 text-gray-300 z-10'>
        <div className='relative flex justify-between pt-20'>
            <div className='flex flex-col items-center'>
                <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
                alt='/'
                width='100'
                height='100' />
                <p className='text-2xl'> {data.weather[0].main}</p>
            </div>
            <p className='text-9xl'>{data.main.temp.toFixed(0)}&#176;</p>
        </div>
        {/*bottom*/}
        <div className='bg-black/75 relative p-8 rounded-md mt-[190px] '>
            <p className='text-2xl text-center pb-6'> Weather in {data.name}</p>
            <div className='flex justify-between text-center'>
                <div>
                    <p className='text-xl'> Feels Like</p>
                    <p className='text-2xl font-bold'>{data.main.feels_like.toFixed(0)}&#176;</p>
                </div>
                <div>
                    <p className='text-xl'> Humidity</p>
                    <p className='text-2xl font-bold'>{data.main.humidity.toFixed(0)}%</p>
                </div>
                <div>
                    <p className='text-xl'> Winds</p>
                    <p className='text-2xl font-bold'>{data.wind.speed.toFixed(0)}<span className='text-xs'>MPH</span> </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather