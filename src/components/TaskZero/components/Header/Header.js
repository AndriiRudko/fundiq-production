import { Row, Col } from "react-bootstrap";
import s from "./Header.module.css";

const Header = () => {
  return (
    <Row>
      <Col>
        <div className={s.root}>TodoList</div>
      </Col>
    </Row>
  );
};

export default Header;
