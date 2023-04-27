import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../TaskZero/components/Header/Header";
import AddTodo from "../TaskZero/components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

const TaskZero = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    id: 0,
    checked: false,
  });
  const [savedValue, setSavedValue] = useState([]);
  return (
    <Container>
      <Header />
      <AddTodo
        inputValue={inputValue}
        setInputValue={setInputValue}
        savedValue={savedValue}
        setSavedValue={setSavedValue}
      />
      <TodoList
        savedValue={savedValue}
        setSavedValue={setSavedValue}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      <Outlet />
    </Container>
  );
};

export default TaskZero;
