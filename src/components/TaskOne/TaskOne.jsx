import React from 'react'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const TaskOne = () => {

 
  const [counter, setCounter] = useState(0);

  const plusCounter = () => {
    setCounter(counter + 1)
  }

  const minysCounter = () => {
    setCounter(counter - 1)
  }


  return (
    <div>
    <p>Поточне число: {counter}</p>
    <button onClick={plusCounter}>+</button>
    <button onClick={minysCounter}>-</button>
    <Outlet />
    </div>

  )
}

export default TaskOne;