import React from 'react'

const Table = () => {




    return (
        <div className='py-20'>
            <table className=' w-11/12 max-w-4xl'>
                <thead className='border-b-2 border-black'>
                    <tr>
                        <th>Checkbox</th>
                        <th>To Do</th>
                        <th>Status</th>
                        <th>Date Created</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>true</td>
                        <td>Lorem ipsum dolor sit</td>
                        <td>Done</td>
                        <td>15-01-2024</td>
                        <td>Actions</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table