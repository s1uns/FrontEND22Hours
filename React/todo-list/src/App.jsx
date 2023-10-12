import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TaskGrid from './components/ToDo/TaskGrid';
import Modal from './components/layouts/Modal';
import Button from './components/layouts/Button';


let globalId = 1;

function App() {
  const exampleImg1 = 'https://img02.rl0.ru/afisha/e780x-i/daily.afisha.ru/uploads/images/9/c8/9c8dbd93078c4276a741b47c3fe1502b.jpg'
  const [task, setTask] = useState({ taskName: '', description: '' })
  const [todos, setTodos] = useState([{ id: 0, name: "First task", description: "Desc", image: exampleImg1 }, { id: globalId++, name: (task.taskName || "No name task"), description: (task.description || 'default description'), image: null }]);
  const [openModal, setOpenModal] = useState(false);

  function createTodo() {

    setTodos(oldTodos => {
      setTask('', '')
      return [...oldTodos, { id: globalId++, name: (task.taskName || "No name task"), description: (task.description || 'default description'), image: exampleImg1 },]
    })
  }

  return <div className='App'>
    <Modal open={openModal} onClose={() => {
      setOpenModal(false);
      setTask('', '')
    }}>
      <form className='submit-form' onSubmit={(e) => {
        e.preventDefault();
        createTodo();
        setOpenModal(false);
      }}>
        Name: <input
          type="text"
          className='input'
          value={task.taskName}
          onChange={e => {
            setTask({ ...task, taskName: e.target.value })
          }} />
        Description:  <textarea
          cols="40"
          rows="5"
          type="text"
          className='input description'
          value={task.description}
          onChange={e => {
            setTask({ ...task, description: e.target.value })
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

    <div className="tasks-container-shadow">
      <div className="tasks-container-inset">
        <TaskGrid tasks={todos} />
      </div>
    </div>

  </div>
}

export default App;
