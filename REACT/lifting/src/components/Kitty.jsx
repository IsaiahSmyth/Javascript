import React, {useState} from 'react'

const kitty = props => {

    const {name, img, desc, id, removeFunction} = props

    const [adopted, setAdopted] = useState(false)
    
    return (
        <div className={adopted?"KittyBoxAdopted":"KittyBox"}>
            <p>{id}</p>
            <h2>{name} {adopted?"(Adopted)":""}</h2>
            <hr/>
            <img src={img} alt={name}/>
            <hr/>
            <p>{desc}</p>
            <button onClick={()=>setAdopted(!adopted)}>{adopted?"cancel":"Adopted"}</button>
            <button onClick={()=>removeFunction(id)}>Remove</button>
        </div>
    )
}

export default kitty