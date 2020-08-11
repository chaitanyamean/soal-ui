import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Dashboard from './pages/user/dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/login';
import {Redirect} from 'react-router';
import Header from './pages/header/header';
import CheckOut from './components/checkout.js/checkout';


function App() {
  return (
       <div>
         <Router>
         <Header />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/user/dashboard' component={Dashboard}/>
        <Route path='/login' 
        render={() =>
          localStorage.getItem('user') ? (
            <Redirect to='/user/dashboard' />
          ) : (
            <Redirect to='/' />

          )
        } />
        <Route path="/checkout" component={CheckOut} />

      </Switch>
         </Router>
    </div>
  );
}

export default App;
