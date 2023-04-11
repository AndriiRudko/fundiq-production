import React from 'react'
import { Outlet } from 'react-router-dom';

const TaskOne = () => {
  return (
    <div>
      <h2>TaskOne</h2>
      <Outlet />
    </div>
  )
}

export default TaskOne;