import React from 'react'
import { useState } from 'react'

export const Counter = () => {
    const[count,setcount]=useState(0)
    const[increment,setincrement]=useState(0)
    const increase=()=>{
      setcount(count+1)
    }
   const decrease=()=>{
      setincrement(increment-1)
    }
  return (
    <div>
        <h1>{count}increse</h1>
        <h1>{increment}decrease</h1>
        <button onClick={increase}>increment</button>
        <button onClick={decrease}>decrement</button>
    </div>
  )
}
