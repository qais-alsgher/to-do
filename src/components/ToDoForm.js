import { React, useState } from 'react';
import shortid from 'shortid';

const ToDoForm = (props) => {
    let [text, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: shortid.generate(),
            text: text,
            complete: false
        });
        // use for set input filed to enpty
        setText("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type={'text'}
                    onChange={(e) => { setText(e.target.value) }}
                    value={text} />
                <button onClick={handleSubmit}>Add Todo</button>
            </form>
        </div>
    )
}

export default ToDoForm;
