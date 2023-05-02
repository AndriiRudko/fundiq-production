import { useState, useEffect } from "react";
import { Row, Col, Button, ButtonGroup } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";
import {
  faPenToSquare,
  faTrashArrowUp,
  faSquareCheck,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import s from "./TodoList.module.css";

const TodoList = ({ setInputValue, savedValue, setSavedValue }) => {
  const [filtered, setFiltered] = useState(savedValue);

  useEffect(() => {
    setFiltered(savedValue);
  }, [savedValue]);

  const todoFilter = (checked) => {
    if (checked === "all") {
      setFiltered(savedValue);
    } else {
      let newTodo = [...savedValue].filter((item) => item.checked === checked);
      setFiltered(newTodo);
    }
  };

  const handleClickChange = (name, id, checked) => {
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
    <div>
      <Row>
        <Col>
          {" "}
          <ButtonGroup
            className={s.btns}
            aria-label="Basic example"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button variant="secondrary" onClick={() => todoFilter("all")}>
              Всі
            </Button>
            <Button variant="secondrary" onClick={() => todoFilter(false)}>
              Відкриті
            </Button>
            <Button variant="secondrary" onClick={() => todoFilter(true)}>
              Закриті
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      <br />
      {filtered.map(({ name, id, checked }) => {
        return (
          <div
            className={s.listItems}
            key={id}
            style={{
              display: "inline",
              textDecoration: checked ? "line-through" : "none",
            }}
          >
            <input
              style={{ marginRight: "15px" }}
              type="checkbox"
              onChange={() => handleCheckboxChange(id, checked)}
            />

            {name}
            <Button
              onClick={() => handleClickChange(name, id, checked)}
              style={{ marginLeft: "50px", marginBottom: "10px" }}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
            <Button
              onClick={() => handleDelete(id)}
              style={{ marginLeft: "20px", marginBottom: "10px" }}
            >
              {" "}
              <FontAwesomeIcon icon={faTrashArrowUp} />
            </Button>
            <br />
          </div>
        );
      })}

      <Outlet />
    </div>
  );
};

export default TodoList;
