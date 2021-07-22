import React from 'react';

const Task = ({title, description}) => {
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
                    <button className="btn btn-info btn-sm mr-2">
                        Add operation
                        <i className="fas fa-plus-circle ml-1"></i>
                    </button>

                    <button className="btn btn-dark btn-sm">
                        Finish
                        <i className="fas fa-archive ml-1"></i>
                    </button>


                    {/*// <!--*/}
                    {/*//   Przycisk usuwania ma być widoczny tylko*/}
                    {/*//   jeżeli nie ma żadnych operacji w zadaniu*/}
                    {/*// -->*/}
                    <button className="btn btn-outline-danger btn-sm ml-2">
                        <i className="fas fa-trash false"></i>
                    </button>
                </div>
            </div>


            {/*// <!-- Komponent Operations -->*/}
        </section>
    );
};

export default Task;