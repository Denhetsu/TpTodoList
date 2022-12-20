import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

const TodoListForm = () => {
  const [input, setInput] = useState("");
  //   const [todos, setTodos] = useState([]);

  //Permet de taper dans l'input
  const Change = (e) => {
    setInput(e.target.value);
  };

  // Permet de cliquer sur ajouter une tache et de ne pas reload la page
  const Submit = (e) => {
    let tmp = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];
    tmp.push(input);
    localStorage.setItem("todos", JSON.stringify(tmp));
    setInput("");
  };

  return (
    <form className="todo-form m-auto" onSubmit={Submit}>
      <Row className="m-auto">
        <Col sm={4} className="input">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Entrez la tâche à ajouter"
            value={input}
            name="text"
            onChange={Change}
          ></input>
        </Col>
      </Row>
      <Row>
        <Col sm={4} className="button">
          <button className="btn btn-primary mb-2" type="submit">
            {" "}
            Ajouter la tâche{" "}
          </button>
        </Col>
      </Row>
    </form>
  );
};

export default TodoListForm;
