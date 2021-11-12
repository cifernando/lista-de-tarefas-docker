import React from "react";
import TaskForm from "../molecules/TaskForm";
import ToDoTable from "../molecules/ToDoTable";

const ToDoContainer = () => {
  return (
    <section className="w-4/6 h-4/6 flex flex-col gap-6  mt-10">
      <div className="flex justify-center shadow sm:rounded-lg p-4 bg-white">
        <h1 className="text-2xl font-bold text-gray-600">Lista de Tarefas</h1>
      </div>
      <TaskForm />
      <ToDoTable />
    </section>
  );
};

export default ToDoContainer;
