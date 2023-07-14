import React, { useState } from 'react'

const Todo_item = props => {

    const { name, id, removeFunction } = props


    const [line, setLine] = useState(false)


    return (
        <div >
            <p className={line? "line":"no_line"}>
            {name}
            <input  onClick={() => setLine(id)} type="checkbox" />
            <button onClick={() => removeFunction(id)}>Delete</button>
            </p>

        </div>
    )
}

export default Todo_item