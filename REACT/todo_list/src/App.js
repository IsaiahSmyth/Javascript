import logo from './logo.svg';
import './App.css';


import './todo.css';
import Todo from './components/Todo';
import Todo_item from './components/Todo_item';
import {useState} from 'react'

function App() {

  const [items, setItems] = useState([])

  const addItems = newItems => {
    setItems(currentItems => ([...currentItems, newItems]))
    console.log(newItems)
  }

  const removeItem = id => {
    let left = items.slice(0, id)
    let right = items.slice(id+1)

    setItems(left.concat(right))
  }
  return (
    <div className="App">
      <h1>To Do List</h1>

      <Todo addFunction = {addItems}/>
      

      {
        items.map((thing, i) => {
          return (
            <Todo_item key={i} id={i} removeFunction={removeItem} name={thing.iName}/>
          )
        })
      }
    </div>
  );
}

export default App;
