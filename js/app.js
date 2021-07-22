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

  return <>
    <NewTask onNewTask={addNewTask}/>
    {tasks.map((el, i) => <Task key={i} {...el} />)}
  </>
}

ReactDOM.render(<App/>, document.querySelector("#app"));