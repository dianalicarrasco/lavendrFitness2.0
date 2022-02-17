import React, { Fragment } from 'react';

import InputExercise from './InputExercise';
import ListExercise from './ListExercise';

const CustomWorkout = () => {
    return (
        <Fragment>
            <div>
                <InputExercise />
                <ListExercise />
            </div>
        </Fragment>
    );
}

export default CustomWorkout;