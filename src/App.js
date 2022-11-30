import "./App.css";
import Task from "./Task";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const addTask = () => {
    setList([
      ...list,
      {
        id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
        taskName: inputValue,
        completed: false,
      },
    ]);
    setInputValue("");
  };
  const deleteTask = (id) => {
    setList(list.filter((task) => task.id !== id));
  };
  const completeTask = (id) => {
    
    setList(list.map((task) => task.id === id ? { ...task, complete: true }: task));
  };
  return (
    <div className="App">
      <div className="input-container">
        <input
          type="text"
          className="input-box"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button className="add-task" variant="dark" onClick={addTask}>
          Add Task
        </Button>
      </div>
      <div className="task-list-container">
        <h1>Tasks</h1>
        {list.length !== 0 &&
          list.map((task, key) => {
            return (
              <Task
                taskName={task.taskName}
                id={task.id}
                complete={task.complete}
                deleteTask={deleteTask}
                completeTask={completeTask}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
