import React, {useState} from 'react'

const Todo = props => {

    const {addFunction} = props

    const [itemData, setItemData] = useState({
        iName: "",
    })

    const formSubmit = e => {
        e.preventDefault()
        addFunction(itemData)
        console.log(itemData)

        setItemData({
            iName: "",
            iChecked: false,
        })
    }

    const handleChange = e => {
        const {name, value} = e.target
            setItemData(currentData => ({...currentData, [name] : value}))
    }

    

    return (
        <div>
            <form onSubmit={formSubmit}>
                <input name="iName" onChange={handleChange} value={itemData.iName} type="text" />

                <button>Add</button>


            </form>
            
        </div>
    )
}

export default Todo