import React, {useState} from 'react'
import'../coolStylez.css'




const Box = (props) => {
    const {color} = props


    const [clicks, setClicks] = useState(0)

    const myStyle = {
        backgroundColor: color,
        width: 200,
        height: '200px',
        margin: "30px",
        display: 'inline-block',
    }


    const buttonClick = () => {
        // alert(`You clicked the ${color} button!`)
        setClicks(clicks+1)
    }

    return (
        <div style={myStyle}>

        <p className='boxText'>{color}</p>

        <button onClick={ buttonClick}>Click me</button>

        <p className='boxText'>{clicks} {clicks==1?"click":"clicks"}</p>

        </div>
    )
}

export default Box