import React, { useContext, useState } from "react";
import { BiPlus } from "react-icons/bi";
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";
import TaskContext from "../../context/TaskContext";

const TaskForm = () => {
  const [newTask, setNewTask] = useState("");
  const [disabled, setDisabled] = useState(true);
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTaskObject = {
      id: Date.now().toString(),
      title: newTask,
      status: true,
    };
    addTask(newTaskObject);
    setNewTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 shadow sm:rounded-lg p-4 bg-white"
    >
      <Input
        type="text"
        color="purple"
        size="regular"
        outline={true}
        placeholder="Digite sua tarefa..."
        value={newTask}
        onChange={({ target: { value } }) => {
          if (value.length > 0) {
            setDisabled(false);
            setNewTask(value);
          }
        }}
      />
      <Button
        color="purple"
        buttonType="filled"
        type="submit"
        size="regular"
        rounded={false}
        disabled={disabled}
        block={false}
        iconOnly={false}
        ripple="light"
      >
        <BiPlus className="text-lg" />
      </Button>
    </form>
  );
};

export default TaskForm;
