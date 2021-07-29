import React, {useEffect, useState} from 'react';
import {postTasks} from "./api/tasks";

const NewTask = ({onNewTask}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();
        const task = {
            title,
            description,
            status: 'open'
        }
        postTasks(task, onNewTask(task))
        setTitle('')
        setDescription('')
    };

    return (
        <div className="card shadow">
            <div className="card-body">
                <h1 className="card-title">New task</h1>
                <form onSubmit={handleAddTask}>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="title"
                               placeholder='Title'
                               value={title}
                               onChange={(e) => setTitle((e.target.value))}/>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="description"
                               placeholder='Description'
                               value={description}
                               onChange={(e) => setDescription((e.target.value))}/>
                    </div>
                    <button className="btn btn-info" type='submit'>
                        Add task
                        <i className="fas fa-plus-circle ml-1"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewTask;