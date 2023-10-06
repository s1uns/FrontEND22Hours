import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TaskGrid from './components/ToDo/TaskGrid';

let globalId = 0;

function App() {
  const [task, setTask] = useState();
  const [todos, setTodos] = useState([{name: "First task", description: "Desc"}]);

  console.log(todos);

  function createTodo(event) {
    event.preventDefault();
    
    setTodos(oldTodos => {
      setTask('')

      return [...oldTodos, { todo: task, id: globalId++ }]
    })
  }

  function deleteItem(itemId) {
    setTodos(oldTodos => oldTodos.filter(item => item.id !== item(itemId)))
  }


  return <div>
    <h1>Best ToDo app ever</h1>

    <form onSubmit={createTodo}>
      <input
        type="text"
        className='input'
        value={task}
        onChange={e => {
          setTask(e.target.value);
        }} />
      <button type='submit'>Create a ToDo item</button>
    </form>

        <TaskGrid>
          {todos}
        </TaskGrid>
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
