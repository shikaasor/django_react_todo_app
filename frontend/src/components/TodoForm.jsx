import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TodoForm = ({ setTodos, fetchData }) => {

    const [newTodo, setNewTodo] = useState( {
        'body': ''
    })

    const handlechange = (e) => {
        setNewTodo(prev => ({
            ...prev,
            'body': e.target.value
        }))
    }

    const postTodo = async () => {
        try {
            await axios.post(`http://localhost:8000/api/todo/`, newTodo)
            setNewTodo( {'body': ''})
            fetchData()
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div>
            <input type="text" placeholder="What do you want to do?" className="input input-bordered w-full max-w-xs"
                onChange={handlechange} value={newTodo.body} 
                onKeyDown={ (e) => {
                    if (e.key === 'Enter') {
                        postTodo()
                    }
                }}
            />
            <button className="btn btn-accent ml-2 text-sm font-semibold" onClick={postTodo}>Add Todo</button>
        </div>
    )
}

export default TodoForm