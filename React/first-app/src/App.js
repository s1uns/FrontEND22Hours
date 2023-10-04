import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Custom from './components/Custom';

function App() {
  return (
    <div className="App">
        <Header />
        <div id = "content">
          This is content
        </div>
        <h1>Hello, world {2+2} </h1>
        <Custom name = "Illia" />
    </div>
  );
}

export default App;
