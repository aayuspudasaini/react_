import './App.css';
import Home from './codes/Home';
import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './codes/Navbar';
import About from './codes/About';
import Error from './codes/Error'

import Contact from './codes/Contact';
function App() {
  return (
    <div>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About}/>
      <Route path="/Contact" component={Contact}/>
      <Route component={Error}/>
      <Redirect exact to="/"/>
    </Switch>
    </div>
  );
}
export default App;
