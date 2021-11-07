import React, {Suspense} from 'react';
import { Route, Link } from 'wouter';

import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import { GifsContextProvider } from './context/GifsContext';
import {UserContextProvider} from './context/UserContext';

import './App.css';

import Header from 'components/Header/Header';
import LoginPage from 'pages/Login';
import RegisterPage from 'pages/Register';

const HomePage = React.lazy(() => import('./pages/Home'));

function App() {
  return (
  <UserContextProvider>
    <div className="App">
      <Suspense fallback={null}>
      <section className="App-Content">
        <Header />
        <Link to="/"><h1 className="text-gradient">*-GifHub-*</h1></Link>
        <GifsContextProvider>
        <Route path="/" component={HomePage} />
        <Route path="/search/:keyword/:rating?" component={SearchResults} />
        <Route path="/gif/:id" component={Detail} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/404" component={() => <h1 className="text-gradient">--/ 404 ERROR UwU /--</h1>} />
        </GifsContextProvider>
      </section>
      </Suspense>
    </div>
  </UserContextProvider>
  );
}

export default App;
