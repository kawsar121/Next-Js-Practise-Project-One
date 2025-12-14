"use client"
import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0) 

    return (
        <div className='mt-16'>
            <h1 className='text-center text-lg'>Conter : <span>{counter}</span></h1>
            <div className='mt-10 flex justify-center gap-5'>
                <button onClick={()=> setCounter(counter+1)} className='border p-2'>Increment</button>
                <button onClick={()=> setCounter(counter-1)} className='border p-2'>Increment</button>
            </div>
        </div>
    );
};

export default Counter;