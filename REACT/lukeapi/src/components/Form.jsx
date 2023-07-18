import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'


const Form = () => {

    const [category, setCategory] = useState("people")

    const [id, setId] = useState("")

    const navigator = useNavigate()
    const buttonClick = () => {
        console.log(`/${category}/${id}`)
        navigator(`/${category}/${id}`)
    }
        

    return (
        <form onSubmit={buttonClick}>
            <label>Search for: </label>
            <select value={ category } onChange={(e => { setCategory(e.target.value) })}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="film">Film</option>
                <option value="species">Species</option>
                <option value="vehicles">Vehicles</option>
                <option value="starship">Starship</option>
            </select>

            <label >ID: </label>
            <input type="text" onChange={(e => { setId(e.target.value) })} value={id}></input>

            <input type="submit" value="Search"/>

        </form>

    )
}

export default Form