import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ allTasks, onDelete, onUpdate }) => {
  const tasks =
    allTasks.length == 0
      ? [{ id: 1, title: "Task 1", description: "This is the sample task" }]
      : allTasks;
  return (
    <div className="dark:bg-gray-800">
      <h2 className="dark:bg-gray-800 dark:text-white-100 font-semibold text-lg mb-2">Tasks</h2>
      <div className="space-y-2">
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
