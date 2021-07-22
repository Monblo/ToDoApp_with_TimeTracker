import React, {useState} from "react";
import ReactDOM from "react-dom";
import NewTask from "./NewTask";
import Task from "./Task";
import {getTasks} from "./api/tasks";

function App() {
  const [task, setTask] = useState([]);

  getTasks(setTask);

  console.log(task)


  return <>
    <NewTask />
    <Task />
  </>
}

ReactDOM.render(<App/>, document.querySelector("#app"));