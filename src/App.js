import React, {useState} from 'react';
import './App.css';
import Pokemon from './Pokemon';

function App() {

  const [isShown, setIsShown] = useState(false);
  
  const handleClick = e => {
    setIsShown(true);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Fetch Pokemon</button>
      {isShown && <Pokemon />}
    </div>
  );
}

export default App;