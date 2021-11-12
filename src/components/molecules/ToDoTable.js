import React, { useContext } from "react";
import Button from "@material-tailwind/react/Button";
import { BiTrash } from "react-icons/bi";
import TaskContext from "../../context/TaskContext";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ToDoTable = () => {
  const { tasks, removeTask, updateStatus, handleOnDragEnd } = useContext(TaskContext);
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="w-2/6 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tarefa
                  </th>
                  <th
                    scope="col"
                    className="w-2/6 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" className="w-2/6 relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="tasks">
                  {(provided) => (
                    <tbody
                      id="tasks"
                      className="bg-white divide-y divide-gray-200"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {tasks.map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided) => (
                            <tr
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="hover:bg-gray-100 bg-white rounded-md border-2 shadow-sm"
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                <h1
                                  className={`${
                                    task.status === true ? "" : "line-through"
                                  } text-md text-gray-900 cursor-pointer select-none`}
                                  onDoubleClick={() => updateStatus(task.id)}
                                >
                                  {task.title}
                                </h1>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span
                                  className={`px-2 inline-flex select-none text-xs leading-5 font-semibold rounded-full ${
                                    task.status === true
                                      ? "bg-green-100 text-green-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {task.status === true
                                    ? "Feita"
                                    : "Em andamento"}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <Button
                                  color="red"
                                  buttonType="filled"
                                  type="submit"
                                  size="regular"
                                  rounded={false}
                                  block={false}
                                  iconOnly={false}
                                  ripple="light"
                                  onClick={() => {
                                    removeTask(task.id);
                                  }}
                                >
                                  <BiTrash className="text-lg" />
                                </Button>
                              </td>
                            </tr>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </tbody>
                  )}
                </Droppable>
              </DragDropContext>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoTable;
