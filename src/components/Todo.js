import React from 'react';

const Todo = ({task, key}) => {
    return(
        <div key={task.id}>
            <h3>{task.task}</h3>
            { task.complete === false ?
            <p>It's a work in progress</p> :
            <p>Already Complete!</p>}
        </div>
    )
};

export default Todo;