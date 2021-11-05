import React, {Suspense} from 'react';
import './App.css';

import { Route, Link } from 'wouter';

import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';

import { Context } from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

const HomePage = React.lazy(() => import('./pages/Home'));

function App() {
  return (
  <Context.Provider value={{}}>
    <div className="App">
      <Suspense fallback={null}>
      <section className="App-Content">
        <Link to="/"><h1 className="text-gradient">*-GifHub-*</h1></Link>
        <GifsContextProvider>
        <Route path="/" component={HomePage} />
        <Route path="/search/:keyword/:rating?" component={SearchResults} />
        <Route path="/gif/:id" component={Detail} />
        <Route path="/404" component={() => <h1 className="text-gradient">--/ 404 ERROR UwU /--</h1>} />
        </GifsContextProvider>
      </section>
      </Suspense>
    </div>
  </Context.Provider>
  );
}

export default App;
