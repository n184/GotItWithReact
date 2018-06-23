
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import Auth from './containers/Auth/Auth';

const App = ()=> (

<Router>
      <div>
        <Layout>
              <Route path="/auth" component={Auth} />
              <Route path="/" exact component={HomePage} />
             
        </Layout>
      </div>
 < /Router>
    );



export default App;