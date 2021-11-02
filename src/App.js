import React from 'react';
import './App.css';
import Logo from './Logo.png';

import { Route, Link } from 'wouter';

import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';

import { Context } from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';


function App() {
  return (
  <Context.Provider value={{}}>
    <div className="App">
      <section className="App-Content">
        <Link to="/"> <img src={Logo} alt="All Gifs Logo" /></Link>
        <GifsContextProvider>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/gif/:id" component={Detail} />
        </GifsContextProvider>
      </section>
    </div>
  </Context.Provider>
  );
}

export default App;
