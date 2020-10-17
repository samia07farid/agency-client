import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Order from './components/ClientOrderDashBd/Order/Order';
import ServiceList from './components/ClientOrderDashBd/ServiceList/ServiceList';
import UserReviews from './components/ClientOrderDashBd/UserReviews/UserReviews';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Admin from './components/AdminPage/Admin/Admin';
import AddService from './components/AdminPage/AddService/AddService'
import MakeAdmin from './components/AdminPage/MakeAdmin/MakeAdmin'

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider
      value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/order/:serviceName">
            <Order></Order>
          </PrivateRoute>
          <Route path="/userServiceList">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/reviews">
            <UserReviews></UserReviews>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/adminServiceList">
            <Admin></Admin>
          </Route>
          <Route path="/adminAddService">
            <AddService></AddService>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
