import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TaskGrid from './components/ToDo/TaskGrid';
import Popup from './components/layouts/Popup'
let globalId = 1;

function App() {
  const [task, setTask] = useState();
  const [description, setDescription] = useState();
  const [todos, setTodos] = useState([{id: 0, name: "First task", description: "Desc"}]);

  function createTodo(event) {
    event.preventDefault();
    
    setTodos(oldTodos => {
      setTask('')
      setDescription('')

      return [...oldTodos, { id: globalId++, name: (task || "No name task"), description: (description || 'default description')}]
    })
  }

  function deleteItem(itemId) {
    setTodos(oldTodos => oldTodos.filter(item => item.id !== item(itemId)))
  }


  return <div>
    <Popup />
    <h1>Best ToDo app ever</h1>
      <div className='submit-form'>
        <form onSubmit={createTodo}>
        Name: <input
          type="text"
          className='input'
          value={task}
          onChange={e => {
            setTask(e.target.value);
          }} />
        Description:  <input
          type="text"
          className='input'
          value={description}
          onChange={e => {
            setDescription(e.target.value);
          }} />
        <button type='submit'>Create a ToDo item</button>
      </form>
      </div>


        <TaskGrid tasks={todos} />
    {/* <ul>
      {todos.map((item, index) => {
        return <div key={item.id}>
          <li>{item.todo} {item.id}</li>
          <button onClick={() => deleteItem(item.id)}>Delete Item</button>
        </div>

      })}
    </ul> */}

  </div>
}

export default App;
