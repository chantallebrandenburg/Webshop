import React from 'react';
import '../App.css';
import {
  Switch,
  Route,
  Redirect,
  HashRouter
} from "react-router-dom";
import Navbar from "./Navbar/Navbar"
import Aboutpage from "./Pages/Aboutpage";
import Contactpage from './Pages/Contactpage';
import Login from './Account/Login';
import Signup from './Account/Signup';
import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './Account/PrivateRoute'
import UpdateProfile from './Account/UpdateProfile'
import ForgotPassword from "./Account/ForgotPassword"
import Homepage from './Pages/Homepage';
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import SingleItem from "./SingleItem/SingleItem";
import { connect } from "react-redux";
import Dashboard from "../Components/Account/Dashboard";







function App({ current }) {
  return (
    <AuthProvider>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
          <Switch>
          <Route exact path="/" component={Homepage}/>
          <PrivateRoute path="/Dashboard" component={Dashboard} />
          <PrivateRoute path="/update-profile" component={UpdateProfile}/>
            <Route exact path="/Product" component={Products}/>
            <Route exact path="/Cart" component={Cart} />
            <Route path="/Contactpage" component={Contactpage}/>
            <Route path="/Aboutpage" component={Aboutpage}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Signup" component={Signup}/>
            <Route path="/forgot-password" component={ForgotPassword}/>
              {!current ? (
            <Redirect to="/" />
                  ) : (
            <Route exact path="/Product/:id" component={SingleItem} />
            )}
            
          </Switch>
        </div>
      </HashRouter>
    </AuthProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
