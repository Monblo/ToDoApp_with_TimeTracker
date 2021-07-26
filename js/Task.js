import React, {useState} from 'react';
import Operations from "./Operations";

const Task = ({title, description, status: taskStatus, remove}) => {
    const [isOn, setIsOn] = useState(false);
    const [status, setStatus] = useState(taskStatus);

    console.log(status)

    const handleIsOn = () => {
        setIsOn(prev => !prev)
    };

    const handleRemove = () => {
        remove()
    };

    const finishedTask = () => {
        setStatus('close')
    };

    return (
        <section className="card mt-5 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
                <div>
                    <h5>{title}</h5>
                    <h6 className="card-subtitle text-muted">{description}</h6>
                </div>

                <div>
                    {/*// <!--*/}
                    {/*//   Przyciski "Add operation" i "Finish" mają być widoczne*/}
                    {/*//   tylko jeżeli status zadania jest "open"*/}
                    {/*// -->*/}
                    {status==='open' && <button className="btn btn-info btn-sm mr-2" onClick={handleIsOn}>
                        Add operation
                        <i className="fas fa-plus-circle ml-1"></i>
                    </button>}

                    {status==='open' && <button className="btn btn-dark btn-sm" onClick={finishedTask}>
                        Finish
                        <i className="fas fa-archive ml-1"></i>
                    </button>}

                    {/*// <!--*/}
                    {/*//   Przycisk usuwania ma być widoczny tylko*/}
                    {/*//   jeżeli nie ma żadnych operacji w zadaniu*/}
                    {/*// -->*/}
                    <button className="btn btn-outline-danger btn-sm ml-2" onClick={handleRemove}>
                        <i className="fas fa-trash false"></i>
                    </button>
                </div>
            </div>

            <Operations form={isOn} setForm={handleIsOn} taskStatus={status}/>
        </section>
    );
};

export default Task;