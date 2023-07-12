import React, { useState } from 'react';

const MoreForm = (props) => {

    const [firstErr, setFirstErr] = useState("")
    const [lastErr, setLastErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    const [confirmErr, setConfirmErr] = useState("")

    const errstyle = {
        margin: 0,
        padding: 0,
        color: "red",
        fontweight: "bold",
    }


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false

    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPassword : "",
    })

    const submitForm = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        // setHasBeenSubmitted({
        //     useState(true)
        // })

        // shorthand ES6 syntax for building an object
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        // firstName("");
        // lastName("");
        // Email("");
        // Password("");
        // ConfirmPassword("");
        setFormData({
            firstName : "",
            lastName : "",
            email : "",
            password : "",
            confirmPassword : "",
        })

        // updating state will change the message to be displayed in the form
        setHasBeenSubmitted(true);
    };

    const handleChange = (e) => {

        const {name, value} = e.target

        console.log(name)
        console.log(value)

        setFormData( (currentData) => ({...currentData, [name] : value}))

        if (name == "firstName"  && value.length < 2) {
            setFirstErr("First Name must be at least 2 characters")
        }
        else {
            setFirstName("")
        }
        if (name == "lastName"  && value.length < 2) {
            setLastErr("Last Name must be at least 2 characters")
        }
        else {
            setLastName("")
        }
        if (name == "email"  && value.length < 2) {
            setEmailErr("Email must be at least 2 characters")
        }
        else {
            setEmail("")
        }
        if (name == "password"  && value.length < 2 ) {
            setPasswordErr("Password must be at least 2 characters")
        }
        else {
            setPassword("")
        }
        if (name == "confirmPassword"  && value.length < 2) {
            setConfirmErr("Confirm Passord must be at least 2 characters")
        }
        else {
            setConfirmPassword("")
        }
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    return (
        <form onSubmit={submitForm}>
            <h3>Welcome {submitForm.firstName}!</h3>
            <div>
                <label>First Name: </label>
                <input type="text" name="firstName" value={ formData.firstName} onChange={ handleChange } />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" name="lastName" value={formData.lastName} onChange={ handleChange} />
            </div>
            <div>
                <label>Email: </label>
                <input type="email" name="email" value={formData.email} onChange={ handleChange} />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" value={formData.password} onChange={ handleChange} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};




export default MoreForm