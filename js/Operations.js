import React, {useState} from 'react';
import Operation from "./Operation";

const Operations = ({form, setForm}) => {
    const [operation, setOperation] = useState('');
    const [operations, setOperations] = useState([])

    const addOperation = (e) => {
        setOperation(e.target.value)
    };

    const operationSumbit = (e) => {
        e.preventDefault();
        setOperations(prev => [operation, ...prev])
        setForm()
    };

    return (
        <>
        <div className="card-body">
            {form && <form onSubmit={operationSumbit}>
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
            {operations.map((el, index) => <Operation key={index} el={el}/>)}
        </ul>
        </>
);
};

export default Operations;