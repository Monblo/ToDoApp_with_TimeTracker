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

  const removeTask = () => {
    setTasks(tasks.filter((el,i) => el.i !== i))
  };

  console.log(tasks)

  return <>
    <NewTask onNewTask={addNewTask}/>
    {tasks.map((el, i) => <Task key={i} {...el} remove={removeTask}/>)}
  </>
}

ReactDOM.render(<App/>, document.querySelector("#app"));