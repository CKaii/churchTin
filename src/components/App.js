import React from 'react';
import GroupCreate from './groups/GroupCreate';
import GroupDetails from './groups/GroupDetails';
import GroupHome from './groups/GroupHome'
import GroupDelete from './groups/GroupDelete'
import GroupEdit from './groups/GroupEdit'
import Header from './Header'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'

const App = () => {
    return (
      <div>
        <div className="ui container">
          <Router history={history}>
            <div>
              <Header />
              <Switch>
                <Route path='/' exact component={GroupHome} />
                <Route path='/groups/create' exact component={GroupCreate} />
                <Route path='/groups/:id' exact component={GroupDetails} />
                <Route path='/groups/edit/:id' exact component={GroupEdit} />
                <Route path='/groups/delete/:id' exact component={GroupDelete} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }


export default App;
