import React, {Fragment, useState} from 'react';

const InputTodo = () => {

    const [description, setDescription] = useState(""); 
    return (
        <Fragment>
            <h1 className='title'>Pern Todo List</h1>
            <form>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                <button>Add</button>
            </form>
        </Fragment>
    )
};

export default InputTodo; 