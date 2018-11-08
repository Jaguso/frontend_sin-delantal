import React, { Component } from 'react';
import {BrowserRouter as Router,
  Route, Redirect
} from 'react-router-dom';
import isAuthenticated from './resolvers/isAuthenticated';

import Signup from './Components/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import FormRestaurant from './Components/FormRestaurant/FormRestaurant';
import FormDish from './Components/FormDish/FormDish';


const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render = {(props) => (
    isAuthenticated() ? <Component {...props}/> : <Redirect to="/login"/>
  )} />
)

const Logout = () => {
  localStorage.removeItem('airbnbToken');
  return <Redirect to="/login" />
}

class Routes extends Component{
  render(){
    return (
      <Router>
        <main>
          <Navbar/>
          <div className="container text-center">
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/restaurant/create" component={FormRestaurant} />
            <Route exact path="/dish/create" component={FormDish} />
          </div>
        </main>
      </Router>
    )
  }
}

export default Routes;