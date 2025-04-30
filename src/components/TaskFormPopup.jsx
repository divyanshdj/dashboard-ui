import React, { useState } from "react";

const TaskFormPopup = ({ onClose, onSubmit }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "To Do",
    priority: "Low",
    comments: 0,
    files: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.title.trim()) return;

    const taskWithId = {
      ...newTask,
      id: Date.now()
    };

    onSubmit(taskWithId);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-50 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Create Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newTask.title}
            onChange={handleChange}
            className="w-full mb-3 px-3 py-2 border rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newTask.description}
            onChange={handleChange}
            className="w-full mb-3 px-3 py-2 border rounded"
          />
          <label className="">Status :</label>
          <select
            name="status"
            value={newTask.status}
            onChange={handleChange}
            className="w-full mb-3 px-3 py-2 border rounded"
          >
            <option value="To Do">To Do</option>
            <option value="On Progress">On Progress</option>
            <option value="Done">Done</option>
          </select>
            <label className="">Priority :</label>
          <select
            name="priority"
            value={newTask.priority}
            onChange={handleChange}
            className="w-full mb-3 px-3 py-2 border rounded"
          >
            <option value="low">Low</option>
            <option value="high">High</option>
            <option value="completed">Completed</option>
          </select>

          <div className="flex justify-end space-x-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:underline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskFormPopup;
