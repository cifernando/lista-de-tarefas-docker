import React, { useState } from "react";
import TaskContext from "./TaskContext";

const TaskProvider = ({ children }) => {
  const localStorageTasks = JSON.parse(localStorage.getItem("tasks"));

  const [tasks, setTasks] = useState(localStorageTasks || []);

  const saveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTasks(tasks);
  };

  const addTask = (task) => {
    saveTasks([...tasks, task]);
  };

  const removeTask = (id) => {
    saveTasks(tasks.filter((task) => task.id !== id));
  };

  const updateStatus = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.status = !task.status;
      }
      return task;
    });
    saveTasks(newTasks);
  };

  const handleOnDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (!destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const reorderedTasks = [...tasks];
    const draggedTask = tasks.find(({ id }) => id === draggableId);

    if (draggedTask) {
      reorderedTasks.splice(source.index, 1);
      reorderedTasks.splice(destination.index, 0, draggedTask);
      saveTasks(reorderedTasks);
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
