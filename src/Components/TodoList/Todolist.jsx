import React, { useState } from "react";
import NewTodoFormInput from "./NewTodoFormInput/NewTodoFormInput";
import TaskRow from "./TaskRow/TaskRow";
import "./Todolist.css";
import { v4 as uuidv4 } from "uuid";

export default function Todolist() {
  const [initialTasks, setInitialTasks] = useState([
    {
      key: uuidv4(),
      task: "Pick up the shipment",
      status: "done",
    },
    {
      key: uuidv4(),
      task: "Practice React",
      status: "in-progress",
    },
    {
      key: uuidv4(),
      task: "Buy a Dyson to mom",
      status: "in-progress",
    },
    {
      key: uuidv4(),
      task: "Do laundry",
      status: "done",
    },
    {
      key: uuidv4(),
      task: "Feed the fish",
      status: "pending",
    },
  ]);

  const createNewTask = (newTodo) => {
    console.log(newTodo);
    setInitialTasks([...initialTasks, newTodo]);
  };

  const removeTask = (key) => {
    setInitialTasks(initialTasks.filter((task) => task.key !== key));
  };

  const completeTask = (key) => {
    const updatedTasks = initialTasks.map((task) => {
      if (task.key === key) {
        return { ...task, status: "done" };
      }
      return task;
    });
    setInitialTasks(updatedTasks);
  };

  return (
    <div className="TodoList">
      <h1>Daniel's TODO List</h1>
      
        {initialTasks.map((task) => {
          return (
            <TaskRow
              complete={completeTask}
              remove={removeTask}
              props={task}
            ></TaskRow>
          );
        })}
      
      <NewTodoFormInput createTodo={createNewTask}></NewTodoFormInput>
    </div>
  );
}
