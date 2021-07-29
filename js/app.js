import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import NewTask from "./NewTask";
import Task from "./Task";
import {getTasks} from "./api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks(setTasks);
  },[]);

  const addNewTask = (task) => {
    setTasks(prev => [task, ...prev])
  };

  const removeTask = (id) => {
    setTasks(prev => prev.filter(el => el.id !== id))
  };

  console.log(tasks)

  return <>
    <NewTask onNewTask={addNewTask}/>
    {tasks.map((el) => <Task key={el.id} {...el} remove={removeTask}/>)}
  </>
}

ReactDOM.render(<App/>, document.querySelector("#app"));