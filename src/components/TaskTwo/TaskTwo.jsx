import React from 'react'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const TaskTwo = () => {
  
  const [inputValue, setInputValue] = useState({name: '', id: 0})
  const [savedValue, setSavedValue] = useState([{name: 'Fundiq', id: 1, options: [{name: 'option1', id: 1}] }])
  const [isOpen, setOpen] = useState(false)

  const handleInputChange = (e) => {
    setInputValue(prev => ({...prev, name: e.target.value}))
  }

 const handleSaveClick = (e) => {
  if (inputValue.id === 0) {
    setSavedValue(prev => [...prev, { name: inputValue.name, id: savedValue.length + 1}])
  } else {
    setSavedValue(prev => prev.map(item => {
      if (item.id === inputValue.id) {
        return {id: item.id, name: inputValue.name}
      } 
      return item;
    }))
  }
  setInputValue({name: '', id: 0})
 }



  return (
  <>
  <div >
      <input type="text" value={inputValue.name} onChange={handleInputChange} disabled={!isOpen && savedValue.length === 0} />
      <input type="checkbox" style={{'width': '15px', 'height': '15px'}} checked={isOpen} onChange={e => setOpen(e.target.checked)}/>
      <button onClick={handleSaveClick} disabled={!isOpen && savedValue.length === 0}>Додати</button>

    </div> 
      {isOpen ? savedValue.map(({ name, id }) => {
        return (
          <div key={id}>
              Список:
            <div>{name}</div>
         </div>
        )
      }
      ) : 
      <div>
        <select name="select">
          {savedValue.map(item => (
            <option key={item.id} value={item.id} >{item.name}</option>
          ))}
        </select>
        <select></select>
        </div>
        }
<Outlet />
  </>


)

  }

export default TaskTwo;