import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from "./components/homePage";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import NotFound from './components/NotFound';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'

const routing = (
  <Router>
  <div id="link">
      <ul>
    <li>
      <Link to="./">Home</Link>
    </li>
      <li>
      <Link to="./Signin">SignIn</Link>
    </li>
      <li>
      <Link to="./signup">SignUp</Link>
    </li>
  </ul>

  </div>
  
    <>
    <Switch>
    <Route exact path="/" component={HomePage}></Route>
    <Route path="/signin" component={SignIn}></Route>
    <Route path="/signup" component={SignUp}></Route>
    <Route component={NotFound}/>
    </Switch>   
    </>
  </Router>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

