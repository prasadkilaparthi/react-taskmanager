import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ allTasks, onDelete, onUpdate }) => {
  const tasks =
    allTasks.length === 0
      ? [{ id: 1, title: "Task 1", description: "This is the sample task" }]
      : allTasks;

  return (
    <div className="dark:bg-gray-700 p-4 rounded-lg">
      <h2 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-100">
        Tasks
      </h2>
      <div className="space-y-2 ">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
