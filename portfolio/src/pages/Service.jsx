import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'

function Service() {
  return (
    <>
      <div className='m-10 p-10 bg-gray-700 text-white'>
        <div className='flex justify-center items-center text-2xl font-serif font-bold'>
          <h1> -: React JS Examples with topic :- </h1>
        </div>
        <div className='text-xl mt-12'>
          <Link to='callback'><div className='flex w-1/3 border p-2 justify-between border-black'>
            --: useCallback-Hook
            <div><FaArrowRight className="mt-1" /></div></div>
          </Link>

          <div>
            <Link to='props'><div className='flex justify-between w-1/3 border p-2 border-black'>
              --: Props Example
              <div><FaArrowRight className="mt-1" /></div></div>
            </Link>
          </div>

          <div>
            <Link to='state-example-1'><div className='flex justify-between w-1/3 border p-2 border-black'>
              --: State Example 1
              <div><FaArrowRight className="mt-1" /></div></div>
            </Link>
          </div>

          <div>
            <Link to='state-example-2'><div className='flex justify-between w-1/3 border p-2 border-black'>
              --: State Example 2
              <div><FaArrowRight className="mt-1" /></div></div>
            </Link>
          </div>

        </div>
      </div>

      <Outlet />
    </>
  )
}

export default Service