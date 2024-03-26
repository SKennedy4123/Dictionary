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
        This project is coded by Sarah Kennedy, open-sourced on <a href="https://github.com/SKennedy4123/Dictionary" target="_blank" rel="noreferrer">GitHub</a>, and hosted on <a href="https://dictionary-kennedy.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>.
      </footer>
    </div>
    </div>
  );
}

export default App;
