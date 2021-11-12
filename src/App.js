import React from "react";
import "@material-tailwind/react/tailwind.css";
import ToDoContainer from "./components/organisms/ToDoContainer";
import TaskProvider from "./context/TaskProvider";

const App = () => {
  return (
    <TaskProvider>
      <main className="w-screen h-screen flex justify-center bg-gray-50">
        <ToDoContainer />
      </main>
    </TaskProvider>
  );
};

export default App;
