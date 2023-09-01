import React from 'react'
import SocialIcons from '../component/SocialIcons'

export const Home = () => {
  return (
    <>
      <div className='flex bg-home-background items-center justify-center h-screen bg-cover'>
        <div className='w-2/3 justify-center items-center'>
          <div>
            <h1 className='flex text-txt-clr2 items-center'>
            I'm <span className='text-hover-clr'> Surya Pratap</span>, Frontend Developer.
            </h1>
          </div>
          <div className='text-txt-clr2 text-xl'>
            <p>I'm a passionate frontend developer with a keen eye for design and a knack for crafting seamless user experiences. My journey into the world of web development began with a fascination for turning ideas into interactive digital realities.</p>
          </div>
          <div>
          <SocialIcons />
        </div>
        <div>
          <button className='bg-zinc-500 px-4 py-2 rounded-full'>
            Download CV
          </button>
        </div>
        </div>
        
      </div>
    </>
  )
}
