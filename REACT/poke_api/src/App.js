import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import SearchPoke from './components/SearchPoke';
import OnePoke from './components/OnePoke';
import AllPoke from './components/AllPoke';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Pokedex</h1>
      <Link className="navLink" to="/">Home</Link>
      |
      <Link className="navLink" to="/search">Search</Link>
      |
      <Link className="navLink" to="/all">All Pokemon</Link>
      |
      <Link className="navLink" to='one'>One Pokemon</Link>




      <Routes>
        <Route path='/searchPoke' element={<SearchPoke/>}></Route>
        <Route path='/one/:poke' element={<OnePoke/>}></Route>
        <Route path='/all/:poke' element={<AllPoke/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
