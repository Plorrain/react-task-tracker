// import React from 'react';
import React, { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery store',
      day: 'Feb 6th at 2:30pm',
      reminder: false,
    }
  ])

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==
    id))
  }

  // Toggle Reminder
  const  toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
    {...task, reminder: !task.reminder} : task
      )
    )
  }

  return (
    <div className ='container'>
        <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder} />
      ) : (
      'No tasks To Show'
      )}
    </div>
  );
}

// class App extends React.Component {
//   render () {
//     return <h1>Hello from class</h1>
//   }
// }

export default App;
