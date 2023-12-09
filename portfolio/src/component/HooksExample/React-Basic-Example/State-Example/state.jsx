import React, { useState } from 'react'

function State() {

    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }

  return (
    <>
        <div>
            <div>
                <h1>{count}</h1>
            </div>

            <div>
                <button onClick={increment}>Increase</button>
            </div>
        </div>
    </>
  )
}

export default State;