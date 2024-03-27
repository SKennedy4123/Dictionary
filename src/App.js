import React from "react";
import logo from './logo.png';
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
            <a href="https://www.pexels.com">Photos provided by Pexels</a>
           <div>
        This project is coded by <a href="https://www.linkedin.com/in/sarah-kennedy-02b2b6293/" target="_blank" rel="noreferrer">Sarah Kennedy</a>, open-sourced on <a href="https://github.com/SKennedy4123/Dictionary" target="_blank" rel="noreferrer">GitHub</a>, and hosted on <a href="https://dictionary-kennedy.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>.
      </div>
      </footer>
    </div>
    </div>
  );
}

export default App;
