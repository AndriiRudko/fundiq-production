import { useState } from "react";
import { Row, Col, Button, ButtonGroup } from "react-bootstrap";
import s from "./TodoList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faTrash,
  faPenToSquare,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState();
  const [filtered, setFiltered] = useState(todo);

  useEffect(() => {
    setFiltered(todo);
  }, [todo]);

  const todoFilter = (status) => {
    if (status === "all") {
      setFiltered(todo);
    } else {
      let newTodo = [...todo].filter((item) => item.status === status);
      setFiltered(newTodo);
    }
  };

  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  }

  const statusTodo = (id) => {
    let newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  };
  const editTodo = (id, title) => {
    setEdit(id);
    setValue(title);
  };

  const saveTodo = (id) => {
    let newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  };
  return (
    <div>
      <Row>
        <Col className={s.filter}>
          <ButtonGroup arial-label="Basic example" className={s.btns}>
            <Button variant="secondary" onClick={() => todoFilter("all")}>
              Все
            </Button>
            <Button variant="secondary" onClick={() => todoFilter(true)}>
              Открытые
            </Button>
            <Button variant="secondary" onClick={() => todoFilter(false)}>
              Закрытые
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      {filtered.map((item) => (
        <div key={item.id} className={s.listItems}>
          {edit === item.id ? (
            <div>
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : (
            <div className={!item.status ? s.close : ""}>{item.title}</div>
          )}
          {edit === item.id ? (
            <div>
              <button onClick={() => saveTodo(item.id)}>
                <FontAwesomeIcon icon={faFloppyDisk} />
              </button>
            </div>
          ) : (
            <div>
              <Button onClick={() => deleteTodo(item.id)} size="sm">
                <FontAwesomeIcon icon={faTrash} />
              </Button>
              <Button
                onClick={() => editTodo(item.id, item.title)}
                size="sm"
                className={s.btn}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </Button>
              <Button
                onClick={() => statusTodo(item.id)}
                className={s.btn}
                size="sm"
              >
                {item.status ? (
                  <FontAwesomeIcon icon={faLock} />
                ) : (
                  <FontAwesomeIcon icon={faLockOpen} />
                )}
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
