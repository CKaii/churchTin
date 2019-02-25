import React from 'react';
import SignIn from './SignIn'
import CreateGroup from './groups/CreateGroup';
import GroupDetails from './groups/GroupDetails';
import GroupHome from './groups/GroupHome'
import GroupDelete from './groups/GroupDelete'
import GroupEdit from './groups/GroupEdit'
import Header from './Header'
import { Router, Route } from 'react-router-dom'
import tachyons from 'tachyons'
import history from '../history'

const App = () => {
    return (
      <div>
        <div className="ui container">
          <Router history={history}>
            <div>
              <Header />
              <Route path='/' exact component={GroupHome} />
              <Route path='/groups/create' exact component={CreateGroup} />
              <Route path='/groups/details' exact component={GroupDetails} />
              <Route path='/groups/edit/:id' exact component={GroupDelete} />
              <Route path='/groups/delete/:id' exact component={GroupEdit} />
            </div>
          </Router>
        </div>
      </div>
    );
  }


export default App;
