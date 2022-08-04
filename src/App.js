import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import Footer from "./Components/Footer";
import About from "./Components/About";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import { useState,useEffect } from "react";  // useState returns a stateful value and a function to update it

function App() {

  const [showAddTaskForm, setshowAddTaskForm] = useState(false);

  const [tasks, setTask] = useState([]);

  useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks();
        setTask(tasksFromServer)
      }

      getTasks();
  },[]) //dependency array : if you want useEffect to run if any value changes, then you pass it here

  // fetch tasks from backend
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks'); // fetch the task data from api

    const data = await res.json();

    return data;
  }


  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`); // fetch the task data from api

    const data = await res.json();

    return data;
  }


  // add task
  const addTask = async (task) => {
    console.log("Adding task.....",task)

    const res = await fetch('http://localhost:5000/tasks',{
      method : 'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(task) // stringify converts javascript object into json object
    });

    const data = await res.json();

    setTask([...tasks, data]);

    // creating a random id
    // const id = Math.floor(Math.random()*10000)+1;
    // const newTask = {id,...task};
    // setTask([...tasks,newTask]);
  }

  // delete task
  const onDelete = async (id) => {

    //deletes from server
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method : 'DELETE'
      })

    //delete from the UI
    setTask(tasks.filter((task)=>(task.id !== id)))
  }

  //toggle reminder
  const toggleReminder = async (id) => {

    const taskToToggle = await fetchTask(id);

    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json();

    console.log(id);
    setTask(tasks.map( (task) => task.id === id ? {...task,reminder: !task.reminder} : task))
    console.log(tasks);
  }

  //show add button form
  const toggleAddButton = () =>{
    setshowAddTaskForm(!showAddTaskForm);
  }

  return (
    <Router>
    <div className="container">
      <Header title="Mili" name={2} toggleAddButton={toggleAddButton} showAdd={showAddTaskForm}/>

      {showAddTaskForm && <AddTask onAdd={addTask}/>}

      <Tasks tasks={tasks} onDelete = {onDelete} onToggle = {toggleReminder}/>

      <Footer />
    </div>
    </Router>
  );
}

export default App;
