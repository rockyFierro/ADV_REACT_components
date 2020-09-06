import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = ({Todos}) => {
    Todos.map((task, index) => {
        return(
        <Todo task={task} key={index} />
        )
    })
};

export default TodoList;