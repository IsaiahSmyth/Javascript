import React from 'react'
import {useState} from 'react'

import {useNavigate} from 'react-router-dom'

const SearchPoke = () => {

    const [query, setQuery] = useState("")
    
    const navigator = useNavigate()

    const doSearch = () => {
        navigator(`/one/${query.toLowerCase()}`)
    }

    return (
        <div>
            <hr/>
            <label>Find a Pokemon: </label>
            <input type='text' onChange={e=>setQuery(e.target.value)} value={query}/>
            <button onClick={doSearch}>SEARCH</button>
        </div>
    )
}

export default SearchPoke