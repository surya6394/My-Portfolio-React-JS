import React from 'react'

const Buttons = (props) => {
  return (
    <button className="bg-btnclr1 hover:bg-txt-clr text-txt-clr hover:text-btnclr1 px-4 py-2 rounded-full">
      {props.Children}
    </button>
  )
}

export default Buttons