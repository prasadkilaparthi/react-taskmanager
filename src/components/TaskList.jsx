import React from 'react'
import TaskItem from './TaskItem';

const TaskList = ({allTasks}) => {
    const tasks = [
        ...allTasks,
        {id : 1,title : 'Task 1',description:'This is the first task'},
        {id : 2,title : 'Task 2',description:'This is the second task'}
    ];
  return (
    <div>
      <h2 className="font-semibold">Tasks</h2>
      <div className="space-y-2">
        {tasks.map((task) => (
            <TaskItem key = {task.id} task = {task}/>
        )) }
      </div>
    </div>
  )
}

export default TaskList
