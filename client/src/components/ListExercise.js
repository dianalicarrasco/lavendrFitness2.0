import React, { Fragment, useEffect, useState } from "react";
// import ChangeIt from "./ChangeIt";

const ListExercise = () => {

    const [exercise, setExercise] = useState([]);

    // const [setcount, setSetCount] = useState(0);

    // const [repcount, setRepCount] = useState(0);

    const deleteExercise = async (id) => {
        try {
            const deleteExercise = await fetch(`http://localhost:3001/custom/${id}`, {
                method: "DELETE"
            })
            setExercise(exercise.filter(exercise => exercise.exercise_id !== id))
        } catch (err) {
            console.log(err.message)
        }
    }

    const getExercise = async () => {
        try {
            const response = await fetch("http://localhost:3001/custom");
            const jsonData = await response.json();

            setExercise(jsonData);
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getExercise();
    }, [])



    // const setSet = async (id) => {
    //     try {
    //         const body = { setcount }
    //         const reponse = await fetch(`http://localhost:3001/custom/${id}`, {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(body)
    //         })
    //     } catch (err) {
    //         console.log(err.message)
    //     }
    // }

    return (
        <Fragment>
            <h5>My Workout</h5>
            <table className="table table-div">
                <tbody>
                    {exercise.map(ex =>
                        <tr key={ex.exercise_id}>
                            <td>{ex.description} </td>
                            <td>{ex.sets} sets
                                {/* <ChangeIt ex={ex} />  */}
                                {/* <button onClick={setSet(ex.exercise_id)}>+</button>
                                <button onClick={() => setSetCount(setcount - 1)}>-</button> */}
                            </td>
                            <td>{ex.reps} reps
                                {/* <ChangeIt ex={ex}/>  */}
                                {/* <button onClick={() => setRepCount(repcount - 1)}>+</button><button onClick={() => setRepCount(repcount + 1)}>-</button> */}
                            </td>
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

//JUST CHANGING STATE
{/* <td>{ex.sets} sets<button onClick={() => setSetCount(setcount + 1)}>+</button><button onClick={() => setSetCount(setcount - 1)}>-</button></td>
<td>{ex.reps} reps<button onClick={() => setRepCount(repcount - 1)}>+</button><button onClick={() => setRepCount(repcount + 1)}>-</button></td> */}
