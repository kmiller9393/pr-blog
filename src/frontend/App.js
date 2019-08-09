import React from 'react';
import { Root, Routes } from 'react-static';
import { Router } from './components/Router/Router';
import { Helmet } from 'react-helmet';
import './app.css';

const App = () => {
  return (
    <Root>
      <Helmet>
        <title>Kimaleen Tran</title>
      </Helmet>
      <React.Suspense fallback={<em>Loading...</em>}>
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
