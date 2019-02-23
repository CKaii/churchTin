import React, { Component } from 'react';
import SignIn from './SignIn'
import CreateGroup from './groups/CreateGroup';
import GroupDetails from './groups/GroupDetails';
import GroupHome from './groups/GroupHome'
import Header from './Header'
import { BrowserRouter, Route } from 'react-router-dom'
import tachyons from 'tachyons'

const App = () => {
    return (
      <div>
        <div className="ui container">
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={GroupHome} />
              <Route path='/groups/create' exact component={CreateGroup} />
              <Route path='/groups/details' exact component={GroupDetails} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }


export default App;
