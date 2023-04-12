import React from 'react'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const TaskOne = () => {

 
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [sevedValue, setSavedValue] = useState([]);


  const plusCounter = () => {
    setCounter(prev => prev + 1)
  }

  const minysCounter = () => {
    setCounter(prev => prev - 1)
  }
  
  const resetCounter = () => {
    setCounter(0)
  }

 const handleInputChange = (e) => {
  setInputValue(e.target.value);
 }

 const handleSaveClick = () => {
  setSavedValue([...sevedValue, inputValue + ' ' + counter])
  setInputValue('');
 }


  return (
    <>
    <div style={{'padding': '10px'}}>Поточне число: {counter}</div>
    <button style={{'margin': '10px'}} onClick={plusCounter}>+</button>
    <button onClick={minysCounter}>-</button>
    <button style={{'margin-left': '10px'}}onClick={resetCounter}>reset</button>

      <div>
        <span style={{'margin-left': '10px'}}>Твоє імʼя: </span>
      <input type="text" value={inputValue} onChange={handleInputChange}></input>
      <button style={{'margin-left': '10px'}} onClick={handleSaveClick}>Зберегти</button>
      </div>
      
     
   
      <h3 style={{'margin-left': '10px'}}>{inputValue}  {counter}</h3>
      <ul>
        {sevedValue.map((value, index,) => (
          <div key={index}>{value}</div>
        ))}
      </ul>
   
    <Outlet />
    </>

  )
}

export default TaskOne;