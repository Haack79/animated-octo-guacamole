import  React, {Fragment, useState} from 'react';
import {EditTodoModalDiv, EditModalContent, EditButton } from './EditTodo.style';

const EditTodo = ({todo}) => {
    const [description, setDescription] = useState(todo.description);
    // edit description func
    const updateDescription = async(e) => {
        console.log(e.target, 'target'); 
        e.preventDefault(); 
        try {
            const body = {description};
            // console.log(JSON.stringify(body)); 
            const response = await fetch(`http://localhost:5001/todos/${todo.todo_id} `, {
                method: "PUT",
                mode:'cors',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body),
                port: 5432
            });
            window.location = "/";
            console.log(response); 
        } catch (err) {
            console.error(err.message);
        }
    }
    const [style, setStyle] = useState(false);  
    const openCloseOnClick = (val) => {
       setStyle(val);
    }
    return (
        <Fragment>
            <button id="myBtn" onClick={() => openCloseOnClick(true)}>Edit</button>
            {/* <!-- The Modal --> */}
            <EditTodoModalDiv open={style}>
            {/* <!-- Modal content --> */}
                <EditModalContent>
                        <input 
                            type="text" 
                            className="edit-form" 
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                        <EditButton onClick={() => {
                            setDescription(todo.description);
                            openCloseOnClick(false);
                        }}
                        >
                            CLOSE
                        </EditButton>
                        <button type="button"
                         onClick={(e) => updateDescription(e)}>update</button>
                </EditModalContent>
            </EditTodoModalDiv>
        </Fragment>
    )
};

export default EditTodo; 