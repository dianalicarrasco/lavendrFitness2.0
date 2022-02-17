import React, { Fragment, useState } from 'react';

const InputExercise = () => {

    const [description, setDescription] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description, sets, reps };
            const response = await fetch("http://localhost:3002/custom", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
            window.location = '/';
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <Fragment>
            <form className="input-form" onSubmit={onSubmitForm}>
                <div className="form-row inputer">
                    <div className="col-7">
                        <input className="form-control" type="text" placeholder="exercise" value={description} onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div className='col'>
                        <input className="form-control" type="text" placeholder="sets" value={sets} onChange={e => setSets(e.target.value)} />
                    </div>
                    <div className='col'>
                        <input className="form-control" type="text" placeholder="reps" value={reps} onChange={e => setReps(e.target.value)} />
                    </div>
                </div>
                <button className="btn btn-primary btn-md addMe">ADD</button>
            </form>
        </Fragment>
    )
}

export default InputExercise;