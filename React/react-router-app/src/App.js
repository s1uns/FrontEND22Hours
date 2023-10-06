import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return ( 
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/hello-world'>
        <h1>I'm on a Hello world route</h1>
      </Route>
    </Routes>


    </BrowserRouter>
    <h2>Just an h2</h2>
    </div>
  );
}

export default App;