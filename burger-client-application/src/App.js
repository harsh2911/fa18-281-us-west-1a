import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Menu from './components/menu/menu-list';
import Homepage from './components/homepage';
import './App.css';
import ListRestaurant from "./components/restaurant/restaurant-list";


class App extends Component {

  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path= "/" render = {() => (<Homepage/>)}/>
            <Route exact path= "/menu/:restaurantId" render = {(match) => (<Menu {...match}/>)}/>
            <Route path="/listRestaurant" render={() => (<ListRestaurant/>)}/>
          </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(App));
