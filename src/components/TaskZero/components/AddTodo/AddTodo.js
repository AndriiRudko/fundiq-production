import { useMemo } from "react";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import s from "./AddTodo.module.css";

const AddTodo = ({ inputValue, setInputValue, savedValue, setSavedValue }) => {
  const counter = useMemo(
    () => savedValue.filter((item) => !item.checked).length,
    [savedValue]
  );

  const handleInputChange = ({ target: { value: name } }) =>
    setInputValue((prev) => ({ ...prev, name }));

  const handleSavedChange = (e) => {
    if (inputValue.id === 0) {
      setSavedValue((prev) => [
        ...prev,
        { name: inputValue.name, id: savedValue.length + 1, checked: false },
      ]);
    } else {
      setSavedValue((prev) =>
        prev.map((item) => {
          if (item.id === inputValue.id) {
            return { id: item.id, name: inputValue.name, checked: false };
          }
          return item;
        })
      );
    }
    setInputValue({ name: "", id: 0, checked: false });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSavedChange();
    }
  };

  const disabled = inputValue.name.length === 0;

  return (
    <Row>
      <Col className={s.addTodoForm}>
        <FormControl
          placeholder="Запиши задачу"
          type="text"
          value={inputValue.name}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        ></FormControl>
        <Button
          style={{ color: disabled ? "red" : "blue" }}
          type="submit"
          disabled={disabled}
          onClick={handleSavedChange}
          className={s.btn}
        >
          Зберегти
        </Button>
      </Col>
      <div>Всі задачі: {counter}</div>
    </Row>
  );
};

export default AddTodo;
