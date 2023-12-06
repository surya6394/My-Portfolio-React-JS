import React, { useState } from 'react'
import data from '../Comp/FormData'

function SignUp() {

  const [formInfo, setFormdata] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    confirmpassword: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormdata({ ...formInfo, [name]: value });
  }


  return (
    <>
      <div className='flex justify-center items-center bg-home-background2 bg-cover'>
        <form className='bg-gray-700 mx-auto h-auto p-10 rounded-2xl mt-10 mb-10 w-1/3'>
          <div className='grid gap-3'>
            <div className=''>
              {data.map((data, index) => (
                <div key={index}>
                  <label htmlFor="fname" className='block text-md text-white font-medium'>{data.label}</label>
                  <input
                    key={index}
                    placeholder={data.placeholder}
                    name={data.name}
                    id={data.id}
                    value={formInfo[data.name]}
                    onChange={handleChange}
                    required
                    className='mt-1 mb-4 p-2.5 w-full border rounded-md'
                  />
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp