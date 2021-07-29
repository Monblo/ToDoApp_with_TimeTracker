import React, {useEffect, useState} from 'react';
import Operation from "./Operation";
import {deleteOperations, postOperation} from "./api/tasks";

const Operations = ({form, setForm, status, operations, onNewOperation, taskId, remove}) => {
    const [operationDescription, setOperationDescription] = useState('');

    const handleOperation = (e) => {
        setOperationDescription(e.target.value)
    };

    const handleAddOperation = (e) => {
        e.preventDefault()
        const operation = {
            description: operationDescription,
            timeSpent: 0
        }
        postOperation(taskId,operation,onNewOperation(operation))
        setForm()
        setOperationDescription('')
    };

    return (
        <>
        <div className="card-body">
            {form && <form onSubmit={handleAddOperation}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Operation description"
                           value={operationDescription}
                            onChange={handleOperation}/>

                    <div className="input-group-append">
                        <button className="btn btn-info" type='submit'>
                            Add
                            <i className="fas fa-plus-circle ml-1"></i>
                        </button>
                    </div>
                </div>
            </form>}
        </div>

        <ul className="list-group list-group-flush">
            {operations.map((el) => <Operation key={el.id} {...el}
                                                      remove={remove}
                                                      status={status}/>)}
        </ul>
        </>
)
};

export default Operations;