import React from 'react';
import { Root, Routes } from 'react-static';
import { Router } from './components/Router/Router';
import Header from './components/Header/Header';
import './app.css';

const App = () => {
  return (
    <Root>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Header />
        <div className="content">
          <Router>
            <Routes path="*" />
          </Router>
        </div>
      </React.Suspense>
    </Root>
  );
};

export default App;
