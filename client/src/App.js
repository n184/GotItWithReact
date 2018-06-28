
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import NeededItems from './components/NeededPage/NeededPage';

const App = ()=> (


<Router>
      <div >
      	<nav className="navbar navbar-expand-lg navbar-dark bg-dark" 
      		style={{ background: "black" }}>
      		<a className="navbar-brand" href="/">Home</a>
      		<a className="navbar-brand" href="/NeededPage">What is needed</a>
      	</nav>
      	 <header className="App-header">
          		<h1 className="App-title">Welcome to Got it</h1>    
        </header>

        <Layout>
              <Route path="/" exact component={HomePage} />
              <Route path="/NeededItems" exact component={NeededItems} />         
        </Layout>
      </div>
 < /Router>
    );



export default App;