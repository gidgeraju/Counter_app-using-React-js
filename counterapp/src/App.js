import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

const App = () => {
  const [num, setNum] = useState(0);
  const handleClick = () => {
      setNum(num + 1);
  };
  const handleClicks = () =>{
    setNum(num-1)
  }

  return (
      <div className="App">
          <h2> {num}</h2>
          <button onClick={handleClick}>
              Add one
          </button>
          <button onClick={handleClicks}> Sub one</button>
      </div>
  );
};


export default App;
