import React, {useState} from 'react';

const Operation = ({el, remove, taskStatus}) => {
    const [time, setTime] = useState();
    const [timeIsOn, setTimeIsOn] = useState(false);
    const [inputTime, setInputTime] = useState();

    const timeToggle = () => {
        setTimeIsOn(prev => !prev)
    };

    const changeInput = (e) => {
        setInputTime(e.target.value)
    };

    const addTime = () => {
        setTime(inputTime)
        timeToggle()
    };

    const handleRemove = () => {
        remove()
    };

    const hour = Math.floor(time/60);
    const minutes = time % 60;

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                {el}
                {time > 0 && <span className="badge badge-success badge-pill ml-2"> {hour}h {minutes}m </span>}
            </div>

            {timeIsOn && <form>
                <div className="input-group input-group-sm">
                    <input type="number" className="form-control" placeholder="Spent time in minutes"
                           style={{width: '12rem'}} onChange={changeInput}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-success" onClick={addTime}><i className="fas fa-save"></i></button>
                        <button className="btn btn-outline-dark" onClick={timeToggle}><i className="fas fa-times false"></i></button>
                    </div>
                </div>
            </form>}

            {!timeIsOn && <div>
                {taskStatus === 'open' && <button className="btn btn-outline-success btn-sm mr-2" onClick={timeToggle}>
                    Add time
                    <i className="fas fa-clock ml-1"></i>
                </button>}

                <button className="btn btn-outline-danger btn-sm" onClick={handleRemove}><i className="fas fa-trash"></i></button>
            </div>}
        </li>
    );
};

export default Operation;