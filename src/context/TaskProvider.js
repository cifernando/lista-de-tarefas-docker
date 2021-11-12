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

  const updateStatus = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.status = !task.status;
      }
      return task;
    }
    );
    setTasks(newTasks);
  };

  const contextValue = {
    tasks,
    addTask,
    removeTask,
    updateStatus,
  };

  return <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
