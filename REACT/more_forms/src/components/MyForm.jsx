import React, { useState } from 'react'

const MyForm = () => {

    const [firstErr, setFirstErr] = useState("")
    const [lastErr, setLastErr] = useState("")

    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
    })

    // const {firstName, setFirstName} = useState("")
    // const {lastName, setLastName} = useState("")
    // const {email, setEmail} = useState("")

    const submitForm = (e) =>{
        
        e.preventDefault(
            
        )
        setFormData({
                firstName : "",
                lastName : "",
                email : "",
            })
        
        // console.log(formData)

        
    }

    const formStyle = {
            width: 400
        }
    
    const errStyle = {
        margin: 0,
        padding: 0,
        color: "red",
        fontWeight: "bold"
    }

    const handleChange = (e) => {

        const {name, value} = e.target

        console.log(name)
        console.log(value)

        setFormData( (currentData) => ({...currentData, [name] : value}))

        if (name == "firstName" && value.length < 2) {
            setFirstErr("First name is too short")
        }
        else{
            setFirstErr("")
        }
        if (name == "lastName" && value.length < 2) {
            setFirstErr("Last name is too short")
        }
        else {
            setLastErr("")
        }
    }


    return (

        
        <form style={formStyle}  onSubmit={submitForm}>


            <fieldset>
                <legend>Sign Up!</legend>

                <p style={errStyle}>{firstErr}</p>
                <label htmlFor="">First name: </label>
                <input name="firstName" value={formData.firstName} onChange={ handleChange } type="text" />
                <br />

                <p style={errStyle}>{lastErr}</p>
                <label htmlFor="">Last Name: </label>
                <input name="lastName" value={formData.lastName} onChange={ handleChange }type="text" />
                <br />

                <label htmlFor="">Email: </label>
                <input name="email" value={formData.email} onChange={ handleChange }type="text" />
                <br />

                <button>Register</button>
            </fieldset>
        </form>
    )
}

export default MyForm