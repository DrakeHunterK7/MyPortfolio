import React from 'react';
import personalmedia from 'Assets/Personal Images';
import './App.scss';

function App() {
  return (
    <div className="App fade-in">
      <header className="App-header">
        <img src={personalmedia[0].source} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> 
  );
}

export default App;
