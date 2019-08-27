import React from 'react';
import { Root, Routes } from 'react-static';
import { Router } from './components/Router/Router';
import { Helmet } from 'react-helmet';
import { ClientContext, GraphQLClient } from 'graphql-hooks';
import memCache from 'graphql-hooks-memcache';
import './app.css';

const client = new GraphQLClient({
  url: process.env.REACT_APP_GRAPHCMS_URL,
  cache: memCache(),
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
  }
});

const App = () => {
  return (
    <ClientContext.Provider value={client}>
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
    </ClientContext.Provider>
  );
};

export default App;
