import React from 'react';
import './App.css';

import { Route, Link } from 'wouter';

import ListOfGifs from './components/ListOfGifs';

function App() {
  return (
    <div className="App">
      <section className="App-Content">
        <h1>All Gifs</h1>
        <Link to="/gif/shinji">Gifs de Shinji</Link>
        <Link to="/gif/asuka">Gifs de Asuka</Link>
        <Link to="/gif/rei-ayanami">Gifs de Rei</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
