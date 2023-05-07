import './App.css';
import { useState } from 'react'

import Header from "./components/Header"
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


const App =() => {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },
    {
      "id": 3,
      "text": "Meeting at Taco King",
      "day": "May 5th at 7:00pm",
      "reminder": true
    }])

// tasks functions

// add task

const addTask = (task)=>{

  const id = Math.floor(Math.random()*10000)+1

  console.log(id)

  const newTask = {id, ...task}
  setTasks ([...task, newTask])
}

//delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks)=> tasks.id !== id))
  }

  const toogleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? { ...task, reminder: !task.reminder} : task))
    console.log(id)

  }

  return (

    <div className='container'>

      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toogleReminder}/>) : ('No task to show')}
    </div>
  )
}

export default App;
