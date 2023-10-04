import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';

const quotes = [
  'If you are good enough, never do it for free.',
  'I am not afraid of man who practice 1000 kicks 1 time, but rather 1 kick 1000 times',
  'abc',
  'def',
  'ghi'
]


function App() {

  const [quote, setQuote] = useState('')

  function randomizeQuote(){
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }

  useEffect(() => {
    alert("The quote was successfully changed")
  }, [quote])

  return (
    <div className="App">
      <div>
        Curent quote: {quote}
      </div>
      <button onClick={randomizeQuote}>Click me</button>
    </div>
  );
}

export default App;
