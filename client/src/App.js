
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';

const App = ()=> (


<Router>
 <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" 
          style={{ background: "black" }}>
          <a className="navbar-brand" href="/">Home</a>
          <a className="navbar-brand" href="/AboutUs">About Us</a>
        </nav>
         <header className="App-header">
              <h1 className="App-title">Welcome to Got it</h1>    
        </header>
     


        <Layout>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/AboutUs" component={AboutUs} />         
        </Layout>
      </div>
 < /Router>
    );



export default App;