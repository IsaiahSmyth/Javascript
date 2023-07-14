import React, {useState}from 'react'

const KittyForm = props => {

    const {addFunction} = props

    const [kittyData, setKittyData] = useState({
        kName: "",
        kDesc: "",
        kImg: "",
    })

    const formSubmit = (e) => {
        e.preventDfault()
        addFunction(kittyData)

        setKittyData({
            kName: "",
            kDesc: "",
            kImg: "",
        })
    }

    const handleChange = (e) => {
        const {name, value} =e.target
            setKittyData(currentData => ({...currentData, [name]:value }))
    }

    return (
        <form onSubmit={formSubmit}>
            <h3>Add a kitty!</h3>

            <label>Name</label>
            <input name={kName} onChange={handleChange} value={kittyData.kName} type="text"/>
            <br/>

            <label>Description</label>
            <input name={kDesc} onChange={handleChange} value={kittyData.kDesc} type="text"/>
            <br/>

            <label>Image</label>
            <input name={kImg} onChange={handleChange} value={kittyData.kImg} type="text"/>
            <br/>

            <button>Add</button>


        </form>
    )
}

export default KittyForm