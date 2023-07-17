import logo from './logo.svg';
import './App.css';

import Axios from './components/Axios';
import axios from 'axios'
import { useEffect, useState } from 'react'


function App() {

  const [pokemon, setPokemon] = useState([])
  
  const [isClicked, setIsClicked] = useState(false)

  

  const getQuoteAxios = () => { 
    setIsClicked(true)
    axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then(res => setPokemon(res.data.results))
      .catch(err => console.log(err))
  }

  //useEffect(getQuoteAxios, [])

  return (
    <div className="App">


      <button onClick={getQuoteAxios} className='fetchButton'>fetch Pokemon</button>
      {
        isClicked ? 
        pokemon.map((thing, i) => {
          return (
            <Axios key={i} id={i} pokemonName={thing.name}/>
          )
        })
        : <div></div>
      }
      
    </div>
  );
}

export default App;
