import logo from './logo.svg';
import './App.css';
import About from './components/About';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import SayWord from './components/SayWord';
import {useState} from 'react'

function App() {

  const [word, setWord] = useState("")

  const navigator = useNavigate()

  const buttonClick = () => {
    navigator('/say/'+word)
  }

  return (
    <div className="App">
      <h1>hello!</h1>
      <Link to={'/'}></Link>
      |
      <Link to={'/hello'}></Link>
      |
      <Link to={'/about'}></Link>
      <hr/>

      <input type="text" onChange={e=>{setWord(e.target.value)}} value={word}></input>

      <button onClick={buttonClick}>Take me somewhere</button>



      <Routes>
        <Route path='/hello' element={<h1>HELLO!</h1>}></Route>
        <Route path='/about' element={ <About /> }></Route>
        <Route path='/' element={<p>Home</p>}></Route>
        <Route path='/say/:word' element={<SayWord/>}></Route>


      </Routes>
    </div>
  );
}

export default App;
