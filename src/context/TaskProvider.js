import React, { useState } from "react";
import TaskContext from "./TaskContext";

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const contextValue = {
    tasks,
    addTask,
    removeTask,
  };

  return <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
