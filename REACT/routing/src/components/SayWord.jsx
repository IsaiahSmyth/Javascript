import React from 'react'
import {useParams} from 'react'

const SayWord = () => {

    const {word} = useParams()

    return (
        <div>{word} is a cool word</div>
    )
}

export default SayWord