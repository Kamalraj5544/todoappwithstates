import React from "react";

const Task = ({ id, taskName, complete, deleteTask, completeTask }) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: complete ? "green" : "white" }}
    >
      <span>{taskName}</span>
      <button onClick={() => completeTask(id)}>Complete</button>
      <button onClick={() => deleteTask(id)}>X</button>
    </div>
  );
};

export default Task;
