import React from 'react'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const TaskOne = (props) => {

 
  const [counter, setCounter] = useState(0);

  const plusCounter = () => {
    setCounter(prev => prev + 1)
  }

  const minysCounter = () => {
    setCounter(prev => prev - 1)
  }
  
  const resetCounter = () => {
    setCounter(0)
  }

  return (
    <>
    <div style={{'padding': '10px'}}>Поточне число: {counter}</div>
    <button  style={{'margin': '10px'}} onClick={plusCounter}>+</button>
    <button onClick={minysCounter}>-</button>
    <button style={{'margin-left': '10px'}}onClick={resetCounter}>reset</button>
   
    <Outlet />
    </>

  )
}

export default TaskOne;