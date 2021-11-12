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
    });
    setTasks(newTasks);
  };

  const handleOnDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    const reorderedTasks = [...tasks];
    const draggedTask = tasks.find(({ taskId }) => taskId === draggableId);

    if (draggedTask) {
      reorderedTasks.splice(source.index, 1);
      reorderedTasks.splice(destination.index, 0, draggedTask);
      setTasks(reorderedTasks);
    }
  };

  const contextValue = {
    tasks,
    addTask,
    removeTask,
    updateStatus,
    handleOnDragEnd,
  };

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export default TaskProvider;
