import React, { useState } from "react";
import "./NewTodoFormInput.css";
import { v4 as uuidv4 } from "uuid";



export default function NewTodoFormInput({createTodo}) {

  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const newTodo = { key: uuidv4(), task: userInput,  status: "in-progress" };
    console.log(newTodo);
    createTodo(newTodo)
    setUserInput("");
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value);
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">New TODO task:</label>
      <input
        value={userInput}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="New Todo Task"
      />
      <button>Add Todo</button>
    </form>
  );
}
