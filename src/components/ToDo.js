import React from 'react';

const ToDo = (props) => {
    return (
        <div>
            <div style={{ textDecoration: props.todo.complete ? "line-through" : "" }}
                onClick={props.toggleComplete}>{props.todo.text}</div>
            <div><button onClick={props.handleDelete}>x</button></div>
        </div>
    )
}

export default ToDo;
