import React, { Fragment, useEffect, useState } from "react";

const ListExercise = () => {

    const [exercise, setExercise] = useState([]);


    const deleteExercise = async (id) => {
        try {
            const deleteExercise = await fetch(`http://localhost:3002/custom/${id}`, {
                method: "DELETE"
            })
            setExercise(exercise.filter(exercise => exercise.exercise_id !== id))
        } catch (err) {
            console.log(err.message)
        }
    }

    const getExercise = async () => {
        try {
            const response = await fetch("http://localhost:3002/custom");
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
            <h5>My Workout</h5>
            <table className="table table-div">
                <tbody>
                    {exercise.map(ex =>
                        <tr key={ex.exercise_id}>
                            <td>{ex.description} </td>
                            <td>{ex.sets} sets</td>
                            <td>{ex.reps} reps</td>
                            <td><button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => deleteExercise(ex.exercise_id)}
                            >Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListExercise;

