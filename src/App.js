import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
