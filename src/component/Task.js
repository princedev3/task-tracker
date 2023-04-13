import React from 'react'
import EachTask from './EachTask'

const Task = ({tasks,onDelete,toggleReminder}) => {
  return (
    <div>
        {tasks.map(task=>(
            <EachTask key={task.id} task={task} onDelete={onDelete} toggleReminder={toggleReminder}/>
        ))}
    </div>
  )
}

export default Task