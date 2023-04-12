import React from 'react'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import './taskOne.css'

const TaskOne = (props) => {

 
  const [counter, setCounter] = useState(0);

  const plusCounter = () => {
    setCounter(counter + 1)
  }

  const minysCounter = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <div style={{'padding': '10px'}}>Поточне число: {counter}</div>
    <button style={{'margin': '10px'}} onClick={plusCounter}>+</button>
    <button onClick={minysCounter}>-</button>
   
    <Outlet />
    </>

  )
}

export default TaskOne;