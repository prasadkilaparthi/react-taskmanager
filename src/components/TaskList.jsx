import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ allTasks, onDelete, onUpdate }) => {
  const tasks = 
    allTasks.length == 0
      ? [{ id: 1, title: "Task 1", description: "This is the sample task" }]
      : allTasks
  ;
  return (
    <div>
      <h2 className="font-semibold">Tasks</h2>
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
