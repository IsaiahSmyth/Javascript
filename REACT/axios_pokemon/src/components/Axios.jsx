import React from 'react'

const Axios = props => {

    const { pokemonName } = props

    return (
        <div>
            <div>
                <p className='quote'></p>
            </div>
            <ul>
                <li>
                    {pokemonName}
                </li>
            </ul>

        </div>
    )
}

export default Axios