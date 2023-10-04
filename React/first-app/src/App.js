import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Custom from './components/Custom';






function App() {
  const [counter, setCounter] = useState(0);

  const btnStyle = {
    margin:  '0 0 0 10px'
  }

  function buttonClickFunction(){
    console.log("I was clicked");
  }

  function increaseCounter(){
    setCounter(counter + 1)
  }

  function decreaseCounter(){
    setCounter(counter - 1)
  }

  return (
    <div className="App">
        <Header />
        <div id = "content">
          This is content
        </div>
        <h1>Hello, world {2+2} </h1>
        <button onClick={increaseCounter}>Increase the counter</button>
        <button onClick={decreaseCounter} style={btnStyle}>Decrease the counter</button>
        <Custom name = "Illia" greeting = "Привіт"/>
        <h1>Counter: {counter}</h1>
    </div>
  );
}

export default App;
