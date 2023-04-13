import React, { useState } from 'react'


const AddTask = ({newTask}) => {
    const [text,setText]= useState("")
    const [day,setDay]= useState("")
    const [reminder,setReminder]= useState(false)

    const onSubmit = (e)=>{
            e.preventDefault()

            if(!text){
                alert("please add task")
                return
            }

            newTask({text, day, reminder})

            setText ("");
            setDay("")
            setReminder(false)
    }


  return (
    <div>
        <form onSubmit={onSubmit}>
            <div className='addtask-element'>
                <label>Task</label>
                <input className='addtask-input' placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)} type="text"/>
            </div>
            <div className='addtask-element'>
                <label>Day & Time</label>
                <input className='addtask-input' placeholder='Add Day & Time'value={day} onChange={(e)=>setDay(e.target.value)}   type="date"/>
            </div>
            <div className='addtask-reminder'>
                <label>Set Reminder</label>
                <input className='addtask-reminder-input' value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} checked={reminder} type="checkbox"/>
            </div>
            <div>
                <input className='addtask-btn'  value="Save Task" type="submit"/>
            </div>
        </form>
    </div>
  )
}


export default AddTask

