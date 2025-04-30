import React, { useState } from 'react';

const TaskFormModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      status
    };

    onSave(newTask);
    setTitle('');
    setDescription('');
    setStatus('To Do');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Create New Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
          >
            <option value="To Do">To Do</option>
            <option value="On Progress">On Progress</option>
            <option value="Done">Done</option>
          </select>
          <div className="flex justify-between mt-4">
            <button type="button" onClick={onClose} className="text-gray-600">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskFormModal;
