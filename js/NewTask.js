import React, {useEffect, useState} from 'react';

const NewTask = ({onNewTask}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [task, setTask] = useState({
        title: '',
        description: '',
        status: 'open'
    });

    const handleClick = (e) => {
        e.preventDefault();
        setTask(prev => {return {...prev, title: title, description: description}})
        setTitle('')
        setDescription('')
    };

    // console.log(task)

    useEffect(() => {
        onNewTask(task)
    },[task]);

    return (
        <div className="card shadow">
            <div className="card-body">
                <h1 className="card-title">New task</h1>
                <form>
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
                    <button className="btn btn-info" onClick={handleClick}>
                        Add task
                        <i className="fas fa-plus-circle ml-1"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewTask;