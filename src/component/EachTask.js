import React from 'react'
import {FaTimes} from "react-icons/fa"

const EachTask = ({task,onDelete, toggleReminder}) => {
  return (
    <div className={`task-element-each ${task.reminder?"reminder":""}`} onDoubleClick={()=>toggleReminder(task.id)}>
        <h4>{task.text} <FaTimes style={{color:"red"}} onClick={()=>onDelete(task.id)}/></h4>
        <p>{task.day}</p>
    </div>
  )
}

export default EachTask