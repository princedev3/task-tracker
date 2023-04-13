import React, { useState } from 'react'
import Header from './component/Header'
import "./App.css"
import Task from './component/Task'
import AddTask from './component/AddTask'

const App = () => {

  const [tasks,setTask] = useState(
    [
      {
          id:1,
          text:"Doctors Appointment",
          day:"Feb 5th at 2:30pm",
          reminder: true
      },
      {
          id:2,
          text:"Meeting at School",
          day:"March 5th at 2:30pm",
          reminder: true
      },
      {
          id:3,
          text:"Food Shoppin",
          day:"April 5th at 2:30pm",
          reminder:false
      },
    ])
  const onDelete = (id)=>{
    setTask(tasks.filter(item=> item.id !==id))
  }
  const toggleReminder = (id)=>{
    setTask(tasks.map(task=>task.id===id?{...task,reminder:!task.reminder}:task))
  }

  const newTask = (task)=> {
  const id = Math.floor(Math.random()*10000) +1

  const newAdd = {id,...task}

  setTask([...tasks,newAdd])
  }
  return (
    <div className='component-element'>

         <div className='app-component'>
            <Header/>
            <AddTask newTask={newTask}/>
            {tasks.length ===0?"No task selected":<Task tasks={tasks} onDelete={onDelete} toggleReminder={toggleReminder}/>}
         </div>
    </div>
  )
}

//{}[] 

// const [item, setItem] =useState(
//   [
//     {
//         id:1,
//         text:"Doctors Appointment",
//         day:"Feb 5th at 2:30pm",
//         reminder: true
//     },
//     {
//         id:2,
//         text:"Meeting at School",
//         day:"March 5th at 2:30pm",
//         reminder: true
//     },
//     {
//         id:3,
//         text:"Food Shoppin",
//         day:"April 5th at 2:30pm",
//         reminder:false
//     },
//   ])

export default App