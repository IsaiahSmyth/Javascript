import logo from './logo.svg';
import './App.css';
import People from './components/People';
import Form from './components/Form';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  // const [word, setWord] = useState("")


  


  const [people, setPeople] = useState({})
  // const [planets, setPlanets] = useState({})
  // const [films, setFilms] = useState({})
  // const [species, setSpecies] = useState({})
  // const [vehicles, setVehicles] = useState({})
  // const [starship, setStarship] = useState({})

  


  

  return (
    <div className="App">
      <Form/>
      <Routes>
        <Route path='/people' element={<People/>}></Route>
        <Route path='/' element={<p>Home</p>}></Route>
      </Routes>
    </div>
  );
}

export default App;
