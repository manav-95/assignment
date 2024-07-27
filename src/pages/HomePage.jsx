import React from 'react'
import MyCarousel from '../components/Carousel/Carousel'

function HomePage() {
  return (
    <div>
      <MyCarousel />
      <div className='text-center my-2 px-2'>
        <h1 className='md:text-2xl text-1xl font-bold uppercase'>Welcome to Springdale Public School, where we nurture young minds for
          a brighter future.</h1>
      </div>
    </div>
  )
}

export default HomePage
