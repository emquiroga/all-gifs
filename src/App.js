import React from 'react';
import './App.css';

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
        <Link to="/"><h1 className="text-gradient">*-GifHub-*</h1></Link>
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
