import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TaskGrid from './components/ToDo/TaskGrid';
import Modal from './components/layouts/Modal';
import Button from './components/layouts/Button';

let globalId = 1;

function App() {
  const [task, setTask] = useState();
  const [description, setDescription] = useState();
  const [todos, setTodos] = useState([{ id: 0, name: "First task", description: "Desc" }]);
  const [openModal, setOpenModal] = useState(false);

  function createTodo() {

    setTodos(oldTodos => {
      setTask('')
      setDescription('')

      return [...oldTodos, { id: globalId++, name: (task || "No name task"), description: (description || 'default description') }]
    })
  }

  function deleteItem(itemId) {
    setTodos(oldTodos => oldTodos.filter(item => item.id !== item(itemId)))
  }


  return <div className='App'>
    <Modal open={openModal} onClose={() => {
      setOpenModal(false);
      setTask('');
      setDescription('');
    }}>
      <form className='submit-form' onSubmit={(e) => {
        e.preventDefault();
        createTodo();
        setOpenModal(false);
      }}>
        Name: <input
          type="text"
          className='input'
          value={task}
          onChange={e => {
            setTask(e.target.value);
          }} />
        Description:  <textarea
          cols="40"
          rows="5"
          type="text"
          className='input description'
          value={description}
          onChange={e => {
            setDescription(e.target.value);
          }} />
        <Button type='submit' className='submit-btn'>
          Create a ToDo item
        </Button>
      </form>
      <div className="img-container"></div>
    </Modal>
    <h1>Best ToDo app ever</h1>
    <div className="controls">
      <Button onClick={() => setOpenModal(true)}>Add a ToDo</Button>
    </div>
    <hr />
    {/* <div className='submit-form'>
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
    </div> */}

    <div className="tasks-container">
      <TaskGrid tasks={todos} />
    </div>

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
