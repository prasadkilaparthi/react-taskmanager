import React, { useState } from "react";

const TaskItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTitle, setEditingTitle] = useState(props.task.title);
  const [editingDescription, setEditingDescription] = useState(
    props.task.description
  );

  const handleSave = () => {
    props.onUpdate(props.task.id, {
      title: editingTitle,
      description: editingDescription,
    });
    setIsEditing(false);
  };
  return (
    <div className="bg-white p-3 rounded shadow flex justify-between items-center text-white-900 dark:bg-gray-800">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editingTitle}
            onChange={(e) => setEditingTitle(e.target.value)}
            className="w-full mb-2 p-2 border border-gray-300 rounded text-gray-900"
          />
          <textarea
            type="text"
            value={editingDescription}
            onChange={(e) => setEditingDescription(e.target.value)}
            className="w-full mb-2 p-2 border border-gray-300 rounded text-gray-900"
          />
        </div>
      ) : (
        <div>
          <h3 className="font-bold">{props.task.title}</h3>
          <p className="font-semibold">{props.task.description}</p>
        </div>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 rounded py-2 px-4 hover:bg-green-900 text-white"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 rounded py-2 px-4 hover:bg-yellow-900 text-white"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => props.onDelete(props.task.id)}
          className="bg-red-500 rounded py-2 px-4 hover:bg-red-900 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
