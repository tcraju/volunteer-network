import React, { useState } from 'react';
import './App.css';
// import Header from './components/Header/Header';
// import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// 
import NotFound from './components/NotFound/NotFound';


import { createContext } from 'react';

import Home from './components/Home/Home';
import TaskDetail from './components/TaskDetail/TaskDetail';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <h3>email: {loggedInUser.email}</h3>
      <Router>
        {/* <Header></Header> */}
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <PrivateRoute path="/registration/:jobId">
            <Registration></Registration>
          </PrivateRoute>
          <Route path="/task/:id">
            <TaskDetail></TaskDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;