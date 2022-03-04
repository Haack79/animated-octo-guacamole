import  React, {Fragment} from 'react';
import {EditTodoModalDiv, EditModalContent, EditSpan } from './EditTodo.style';

const EditTodo = () => {
    return (
        <Fragment>
            <button id="myBtn">Open Modal</button>
            {/* <!-- The Modal --> */}
            <EditTodoModalDiv id="myModal" class="modal">
            {/* <!-- Modal content --> */}
                <EditModalContent class="modal-content">
                    <EditSpan class="close">&times;</EditSpan>
                    <p>Some text in the Modal..</p>
                </EditModalContent>
            </EditTodoModalDiv>
        </Fragment>
    )
};

export default EditTodo; 