import React, {useEffect, useState} from 'react';
import Operation from "./Operation";
import {getOperations} from "./api/tasks";

const Operations = ({form, setForm, taskStatus, operations, setOperations, taskId}) => {
    const [operation, setOperation] = useState('');

    const addOperation = (e) => {
        setOperation(e.target.value)
    };

    // const operationSumbit = (e) => {
    //     e.preventDefault();
    //     setOperations(prev => [operation, ...prev])
    //     setForm()
    // };
    //
    // const removeOperation = () => {
    //     setOperations(operations.filter((el,index) => el.index !== index))
    // };

    return (
        <>
        <div className="card-body">
            {form && <form onSubmit={''}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Operation description"
                    onChange={addOperation}/>

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
                                                      // remove={removeOperation}
                                                      taskStatus={taskStatus}/>)}
        </ul>
        </>
)
};

export default Operations;