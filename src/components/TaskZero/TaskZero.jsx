import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Header from "../TaskZero/components/Header/Header";
import AddTodo from "../TaskZero/components/AddTodo/AddTodo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashArrowUp,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const TaskZero = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    id: 0,
    checked: false,
  });
  const [savedValue, setSavedValue] = useState([]);

  const handleClickChange = (name, id) => {
    setInputValue({ name, id });
  };

  const handleDelete = (id) => {
    const updateItems = savedValue.filter((item) => item.id !== id);
    setSavedValue(updateItems);
  };

  const handleCheckboxChange = (id, checked) => {
    setSavedValue((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !checked };
        }
        return item;
      })
    );
  };

  return (
    <Container>
      <Header />
      <AddTodo
        inputValue={inputValue}
        setInputValue={setInputValue}
        savedValue={savedValue}
        setSavedValue={setSavedValue}
      />
      {savedValue.map(({ name, id, checked }) => {
        return (
          <div
            key={id}
            style={{
              display: "inline",
              textDecoration: checked ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(id, checked)}
            />
            {name}
            <Button onClick={() => handleClickChange(name, id, checked)}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
            <Button onClick={() => handleDelete(id)}>
              {" "}
              <FontAwesomeIcon icon={faTrashArrowUp} />
            </Button>
            <br />
          </div>
        );
      })}

      <Outlet />
    </Container>
  );
};

export default TaskZero;
