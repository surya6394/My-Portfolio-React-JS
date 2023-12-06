import React, { useCallback, useState } from 'react'
import Todo from './Todo';

function Callback() {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const Increment = () => {
        setCount(count + 3);
    }

    const Decreament = () => {
        setCount(count - 2);
    }

    const addTodo = useCallback(() => {
        setTodos((prev) => [...prev, "Todo task "]);
    }, [todos])

    return (
        <>
            <div className='mx-auto w-1/4 bg-slate-400 py-10 rounded-md'>
                <Todo todos={todos} addTodo={addTodo} />
                <div className='flex justify-center items-center'>
                    <button className='px-4 py-3 text-2xl font-bold bg-btnclr1 hover:bg-txt-clr text-txt-clr hover:text-btnclr1 rounded-2xl' onClick={Decreament}>-</button>
                    <h1 className='px-5 text-2xl font-bold'>{count}</h1>
                    <button className='px-4 py-3 text-2xl font-bold bg-btnclr1 hover:bg-txt-clr text-txt-clr hover:text-btnclr1 rounded-2xl' onClick={Increment}>+</button>
                </div>
            </div>
        </>
    )
}

export default Callback