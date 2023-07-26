import React from 'react'
import banner from '../assets/Group 77.png'

const Hero = () => {
  return (
    <>
        <section className='hero'>
            <img src={banner} alt="" className='hero--img'/>
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    </>
  )
}

export default Hero