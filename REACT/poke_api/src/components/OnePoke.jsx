import React, {useEffect, useState} from 'react'

import {useParams} from 'react-router-dom'
import axios from 'axios'

const OnePoke = () => {

    const {poke} = useParams()

    const [pic, setPic] = useState("")

    const getPokeDate = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
            .then(res=>setPic(res.data.sprites.front_default))
            .catch(err=>console.log(err))
    }

    useEffect(getPokeDate, [])

    return (
        <div>
            <h2>{poke.toUpperCase()}</h2>
            <img alt={poke} src={pic} width={500}/>
        </div>
    )
}

export default OnePoke