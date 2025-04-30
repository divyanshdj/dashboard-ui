import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { tasks as initialTasks } from "../utils/task"; 
import TaskFormPopup from "./TaskFormPopup";

const STATUS_COLORS = {
  "To Do": "#5030E5",
  "On Progress": "#FFA500",
  "Done": "#8BC48A",
};

const Layout = ({ content }) => {
  const [color, setColor] = useState(STATUS_COLORS["To Do"]);
  const [tasks, setTasks] = useState(initialTasks);
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    setColor(STATUS_COLORS[content] || STATUS_COLORS["To Do"]);
  }, [content]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="flex flex-col min-h-[550px] w-full max-w-[470px] p-4 sm:p-6 md:p-8 bg-gray-100 rounded-lg shadow-md">
      <header
        className="flex items-center justify-between px-4 py-2 border-b-2 bg-gray-100"
        style={{ borderColor: color }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
          ></span>
          <h1 className="text-lg font-semibold">{content}</h1>
          <div className="flex items-center justify-center gap-1 text-gray-500 text-sm">
            <span className="relative left-2 z-2">{tasks.length}</span>
            <div className="relative right-2 w-5 h-5 rounded-full bg-gray-300" />
          </div>
        </div>
        {content === "To Do" && (
          <button
            title="Add new task"
            onClick={() => setPopupVisible(true)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
                fill={color}
              />
              <path
                d="M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z"
                fill={color}
              />
            </svg>
          </button>
        )}
      </header>

      <main className="flex-1 p-4 bg-gray-100 space-y-4 overflow-y-auto max-h-[450px]">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </main>

      {isPopupVisible && (
        <TaskFormPopup
          onClose={() => setPopupVisible(false)}
          onSubmit={handleAddTask}
        />
      )}
    </div>
  );
};

export default Layout;
