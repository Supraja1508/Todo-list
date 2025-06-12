import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask(""); // Clear input
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTasks);
  };

  return (
    <div className="app">
      <h1><center>To-Do List</center></h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul className="task-list">
        {taskList.map((item, index) => (
          <li key={index} className="task-item">
            <span>{item}</span>
            <button onClick={() => handleDelete(index)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
