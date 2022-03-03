import React, {Fragment, useEffect, useState} from 'react';

const ListTodos = () => {
    const [todos, setTodos] = useState([]);

    const getTodos = async() => {
        try {
            const response = await fetch('http://localhost:5001/todos');
            const jsonData = await response.json(); 
            setTodos(jsonData); 
        } catch (err) {
            console.error(err.message); 
        }
    }
    useEffect(() => {
        getTodos();
    },[]);
    return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/*
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    */}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodos; 