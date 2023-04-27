import React from 'react'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const TaskOne = () => {

 
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState({name: '', id: 0, counter: counter});
  const [savedValue, setSavedValue] = useState([]);


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
  setInputValue(prev => ({...prev, name: e.target.value}));
 }

 const handleButtonChange = (name, id, counter) => {
  setInputValue({name, id, counter});
  setCounter(counter)
 }

 const handleSaveClick = () => {
  if (inputValue.id === 0) {
    setSavedValue(prev => [...prev, {name: inputValue.name, id: savedValue.length + 1, counter: counter}])
  } else {
    setSavedValue(prev => prev.map(item => {
      if (item.id === inputValue.id) {
        return {id: item.id, name: inputValue.name, counter: counter}
      }
      return item;
    }))
  }
  setInputValue({name: '', id: 0, counter: counter});
 }

  return (
    <>
    <div style={{'padding': '10px'}}>Поточне число: {counter}</div>
    <button style={{'margin': '10px'}} onClick={plusCounter}>+</button>
    <button onClick={minysCounter}>-</button>
    <button style={{'margin-left': '10px'}}onClick={resetCounter}>reset</button>

      <div>
        <span style={{'margin-left': '10px'}}>Твоє імʼя: </span>
      <input type="text" value={inputValue.name} onChange={handleInputChange}></input>
      <button style={{'margin-left': '10px'}} onClick={handleSaveClick}>Зберегти</button>
      </div>
      
     
      <ul >
        {savedValue.map(({name, id, counter}) => (
          <div style={{'display': 'flex', 'align-items': 'center', 'gap': '10px'}}>
            <div key={id}>{name} {counter}</div>
          <button  onClick={() => handleButtonChange(name, id, counter)}>Редегувати</button>
          </div>
        ))}
      </ul>
   
    <Outlet />
    </>

  )
}

export default TaskOne;