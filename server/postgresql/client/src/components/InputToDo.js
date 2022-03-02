import React, {Fragment, useState} from 'react';

const InputTodo = () => {

    const [description, setDescription] = useState(""); 

    const onSubmitForm = async(e) => {
        e.preventDefault(); 
        try {
            const body = {description}; 
            const response = await fetch('http://localhost:5000/todos', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
            console.log(response); 
        } catch (err) {
            console.error(err.message); 
        }
    }
    return (
        <Fragment>
            <h1 className='title'>Pern Todo List</h1>
            <form onSubmit={onSubmitForm}>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                <button>Add</button>
            </form>
        </Fragment>
    )
};

export default InputTodo; 