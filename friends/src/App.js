import React from 'react';
import {Route} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LoginForm} />
      <PrivateRoute exact path='/friends' component={Friends} />
    </div>
  );
}

export default App;
