import React, { memo } from 'react'

const Todo = ({ addTodo, todos }) => {

  console.log("child render")
  return (
    <>
      <div className='flex justify-center items-center bg-gray-300 py-3 rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
        <h1 className='font-mono font-bold text-2xl text-stone-700'>Today's Task</h1>
      </div>
      <div className='flex justify-center items-center'>
        <div>
          {todos.map((todo, index) => {
            return <p key={index}>{todo + index}</p>
          })}
        </div>
      </div>

      <div className='flex justify-center items-center my-6'>
        <button className='p-3 px-8 bg-red-400 text-xl font-serif font-bold rounded-xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]' 
        onClick={addTodo}>Add Todo</button>
      </div>

      <hr className='flex justify-center border-1 border-gray-900 mx-auto w-2/3 my-5' />
    </>
  )
}

export default memo(Todo)