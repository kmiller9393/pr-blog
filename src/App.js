import React from 'react';
import { Root, Routes } from 'react-static';
import { Router } from './components/Router/Router';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Helmet } from 'react-helmet';
import * as emailjs from 'emailjs-com';
import './app.css';

const App = () => {
  return (
    <Root>
      <Helmet>
        <title>Kimaleen Tran</title>
        <script
          type="text/javascript"
          src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"
        />
        <script type="text/javascript">
          {(function() {
            emailjs.init(process.env.REACT_APP_USER_ID);
          })()}
        </script>
      </Helmet>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Header />
        <Navbar />
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
