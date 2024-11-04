import React from 'react'

const TaskItem = (props) => {
  return (
    <div className="bg-white p-3 rounded shadow">
        <h3 className="font-bold">{props.task.title}</h3>
        <p className='font-semibold'>{props.task.description}</p>
    </div>
  )
}

export default TaskItem
