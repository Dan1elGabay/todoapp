import React from "react";
import "./TaskRow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TaskRow({complete,remove, props }) {
  function taskStatus(status) {
    switch (status) {
      case "pending":
        status = "pending";
        break;
      case "in-progress":
        status = "Todo-task inProgress";
        break;
      case "done":
        status = "Todo-task done";
        break;
      default:
        break;
    }
    return status;
  }
  const deleteTask = (e) => {
    console.log(e.currentTarget.id);
    remove(e.currentTarget.id)
  };

  const completeTask = (e) => {
    console.log(e.currentTarget.id);
    complete(e.currentTarget.id)
  };


  return (
    <div className="Todo">
      <li className={taskStatus(props.status)}>{props.task}</li>
      <div className="Todo-buttons">
        <button id={props.key} onClick={deleteTask}>
          <FontAwesomeIcon icon="fa-solid fa-trash" />
        </button>
        {props.status !== "done" && (
          <button id={props.key} onClick={completeTask}>
            <FontAwesomeIcon icon="fa-solid fa-check" />
          </button>
        )}
      </div>
    </div>
  );
}
