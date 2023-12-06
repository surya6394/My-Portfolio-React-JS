import React, { memo } from 'react'

const Todo = ({ addTodo, todos }) => {

  console.log("child render")
  return (
    <>
      <div className='flex justify-center items-center'>
        <div>
          <h1>My Todo List</h1>
        </div>
        <div>
          {todos.map((todo, index) => {
            return <p key={index}>{todo + index}</p>
          })}
        </div>
      </div>

      <div className='flex justify-center'>
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  )
}

export default memo(Todo)