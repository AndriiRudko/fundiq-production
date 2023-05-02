import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
const TaskFour = () => {
  const [characters, setCharacters] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [todos, setTodos] = useState([]);
  const handleClick = () => {
    if (clicked) {
      setCharacters([]);
    } else {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setCharacters(data));
    }
    setClicked(!clicked);
  };

  const handleClickTwo = () => {
    if (clicked) {
      setTodos([]);
    } else {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((data) => setTodos(data));
    }
    setClicked(!clicked);
  };

  return (
    <div>
      <button onClick={handleClick}>Завантажити персонажів</button>
      <button onClick={handleClickTwo}>Якісь дані</button>
      {characters.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
        </div>
      ))}
      {todos.map((todos) => (
        <div key={todos.id}>
          <h2>{todos.name}</h2>
        </div>
      ))}
      <Outlet />
    </div>
  );
};
export default TaskFour;
