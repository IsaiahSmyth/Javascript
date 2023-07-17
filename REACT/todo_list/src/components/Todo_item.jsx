import React, { useState } from 'react'

const Todo_item = props => {

    const { name, id, removeFunction, items, setItems } = props

    const item = items[id]


    const handleClick = e => {
        const itemTemp = {
            iName : item.iName,
            iChecked : e.target.checked 
        }
        const itemsTemp = [...items]
        itemsTemp[id] = itemTemp
        setItems(itemsTemp)
    }



    return (
        <div >
            <p className={ item.iChecked? "line":"no_line"}>
            {item.iName}
            <input  onChange={handleClick}  type="checkbox" />
            <button onClick={() => removeFunction(id)}>Delete</button>
            </p>

        </div>
    )
}

export default Todo_item