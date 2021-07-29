import React, {useEffect, useState} from 'react';
import Operations from "./Operations";
import {deleteTasks, getOperations, updateTasks} from "./api/tasks";

const Task = ({title, description, id, status: taskStatus, remove}) => {
    const [isOn, setIsOn] = useState(false);
    const [status, setStatus] = useState(taskStatus);
    const [operations, setOperations] = useState([])

    console.log(status)

    const handleIsOn = () => {
        setIsOn(prev => !prev)
    };

    const handleRemoveTask = () => {
        deleteTasks(id,() => remove(id))
    };

    const finishedTask = () => {
        setStatus('close')
    };

    const handleFinishTask = () => {
        const task = {
            title,
            description,
            status: 'closed'
        }
        updateTasks(id,task,finishedTask)
    };

    useEffect(() => {
        getOperations(id, setOperations)
    },[]);

    const addNewOperation = (operation) => {
        setOperations(prev => [operation, ...prev])
    };

    const removeOperation = () => {
        setOperations(operations.filter(el => el.id !== id))
    };

    return (
        <section className="card mt-5 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
                <div>
                    <h5>{title}</h5>
                    <h6 className="card-subtitle text-muted">{description}</h6>
                </div>

                <div>
                    {status==='open' && <button className="btn btn-info btn-sm mr-2" onClick={handleIsOn}>
                        Add operation
                        <i className="fas fa-plus-circle ml-1"></i>
                    </button>}

                    {status==='open' && <button className="btn btn-dark btn-sm" onClick={handleFinishTask}>
                        Finish
                        <i className="fas fa-archive ml-1"></i>
                    </button>}

                    {/*// <!--*/}
                    {/*//   Przycisk usuwania ma być widoczny tylko*/}
                    {/*//   jeżeli nie ma żadnych operacji w zadaniu*/}
                    {/*// -->*/}
                    <button className="btn btn-outline-danger btn-sm ml-2" onClick={handleRemoveTask}>
                        <i className="fas fa-trash false"></i>
                    </button>
                </div>
            </div>

            <Operations form={isOn}
                        setForm={handleIsOn}
                        status={status}
                        operations={operations}
                        onNewOperation={addNewOperation}
                        taskId={id}
                        remove={removeOperation}
            />
        </section>
    );
};

export default Task;