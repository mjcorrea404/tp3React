import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React, { useState } from 'react';

function App() {
  const [state, setState] = useState({
    msj: "(from changed state)"
  });

  const handleClick = () => {
    alert(state.msj);
  };

  return (
    <div className="App">
      <h1>Hello World {state.msj}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
