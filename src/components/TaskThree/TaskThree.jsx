import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
const TaskThree = () => {
  const [todo, setTodo] = useState([]);

  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
      <Outlet />
    </Container>
  );
};

export default TaskThree;
