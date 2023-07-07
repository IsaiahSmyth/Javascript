import React, {useState} from 'react'

const Person = (props) => {
    const {name, age, hairColor} = props

    const [click, setClicks] = useState(age)

const buttonClick = () => {
    setClicks(click+1)
}

    return (
        <div>

            <h1>{name}</h1>
            <p>Age: {click} </p>
            <p>hair Color: {hairColor} </p>
            <button onClick={ buttonClick }>Birthday Button for Jane Doe</button>

        </div>
    )
}

export default Person