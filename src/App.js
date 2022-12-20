import React from "react";
import { Container } from "react-bootstrap";
import Todo from "./Component/Todo";
import TodoListForm from "./Component/Todolistform";

function App() {
  return (
    <Container className="App">
      <h2
        style={{
          margin: "1rem",
          textAlign: "center",
          fontFamily: "revert",
        }}
      >
        Votre todo list !{" "}
      </h2>
      <div
        style={{
          borderBottom: "1px solid grey",
          width: "30%",
          margin: "2rem auto",
        }}
      />
      <TodoListForm />
      <div
        style={{
          borderBottom: "1px solid grey",
          width: "50%",
          margin: "2rem auto",
        }}
      />
      <Todo />
    </Container>
  );
}

export default App;
