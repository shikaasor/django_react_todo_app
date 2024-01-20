import React from 'react'

const TodoForm = () => {
    return (
        <div>
            <input type="text" placeholder="What do you want to do?" className="input input-bordered w-full max-w-xs" />
            <button className="btn btn-accent ml-2 text-sm font-semibold">Add Todo</button>
        </div>
    )
}

export default TodoForm