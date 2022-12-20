import React, { useState } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import "../App.css";
const Todo = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
  if (!todos || todos === null || todos === undefined || todos.length === 0) {
    return <h1 className="titre">Rentrer votre première tache ! </h1>;
  }

  const removeTodo = (index) => {
    let tmp = JSON.parse(localStorage.getItem("todos"));
    tmp.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(tmp));
    setTodos(JSON.parse(localStorage.getItem("todos")));
  };

  return (
    <Row>
      {todos.map((todo, index) => {
        return (
          <Col key={index} sm={3} className="card-todo">
            <Card className="m-auto">
              <Card.Body className="m-auto" s>
                <Card.Text
                  style={{
                    textAlign: "center",
                  }}
                >
                  {todo}
                </Card.Text>
                <Button
                  variant="danger"
                  onClick={() => {
                    removeTodo(index);
                  }}
                >
                  remove
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Todo;
