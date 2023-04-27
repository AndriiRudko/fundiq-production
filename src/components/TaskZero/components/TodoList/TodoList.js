import { Button, Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";
import {
  faPenToSquare,
  faTrashArrowUp,
} from "@fortawesome/free-solid-svg-icons";

const TodoList = ({ setInputValue, savedValue, setSavedValue }) => {
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
            <Button
              style={{ "margin-right": "10px" }}
              onClick={() => handleClickChange(name, id, checked)}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
            <Button
              style={{ "margin-right": "10px" }}
              onClick={() => handleDelete(id)}
            >
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

export default TodoList;
