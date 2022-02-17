import React, { Fragment, useEffect, useState } from 'react';

const ListGeneratedExercises = () => {

    const [exercise, setExercise] = useState([]);

    const getExercise = async () => {
        try {
            const response = await fetch("http://localhost:3002/generate");
            const jsonData = await response.json();

            setExercise(jsonData);
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getExercise();
    }, [])

    return (
        <Fragment>
            <h5> My Workout</h5>
            <table className='table table-div'>
                <tbody>
                    {exercise.map(ex =>
                        <tr key={ex.exercise_id}>
                            <td>{ex.description} </td>
                            <td>{ex.sets} sets
                                {/* <ChangeSet ex={ex} /> */}
                                {/* <ChangeValue></ChangeValue> */}
                            </td>
                            <td>{ex.reps} reps
                                {/* <ChangeSet ex={ex}/> */}
                                {/* <ChangeValue></ChangeValue> */}
                            </td>
                            <td>
                                <div class="form-check">
                                    <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListGeneratedExercises;