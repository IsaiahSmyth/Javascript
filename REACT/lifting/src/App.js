import logo from './logo.svg';
import './App.css';


import Kitty from './components/kitty';
import KittyForm from './components/KittyForm';

import {useState} from 'react'

function App() {
  
const [kitties, setKitties] = useState([])


const addKitty = newKitty => {
  setKitties(currentKitties => ([...currentKitties, newKitty]))
}

const removeKitty = id => {
  let left = kitties.slice(0,id)
  let right = kitties.slice(id+1)

  setKitties(left.concat(right))
}

  return (
    <div className="App">

      <h1>Purrfect Match!</h1>

      <KittyForm addFunction = {addKitty}/>

      {
        kitties.map((cat, i) => {
          return (
            <Kitty key={i} id={i} removeFunction={removeKitty} name={cat.kName} img={cat.kImg} desc={cat.kDesc} />
          )
        })
      }

      <Kitty name="Olli" img=""/>
    </div>
  );
}

export default App;
