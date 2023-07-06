import React from 'react'

const MyForm = () =>{




    const formStyle = {
        width: 400
    }
    return (
        <form style={formStyle}>
            <fieldset>
                <leagend>Sign Up!</leagend>

                <label>First Name: </label>
                <input type="text"></input>
                <br/>

                <label>First Name: </label>
                <input type="text"></input>
                <br/>


                <input type="submit">Register</input>

            </fieldset>
        </form>
    )
}


export default MyForm