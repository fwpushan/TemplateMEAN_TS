import React from 'react';
import { Route, Switch } from 'react-router';
import * as routes from './constants/routes';

import Login from './components/loginForm/LoginForm';
import PilotsList from './components/pilotsList/PilotsList';
import ChangePass from './components/changePassForm/ChangePass';
import NavBar from './components/navBar/NavBar';

const Routes = (props) => {
  return (
    <div>
      <Route path= "/dashboard" component={NavBar}/>
      <Switch>
        <Route path={routes.HOME} exact component={Login} />
        <Route path={routes.PILOT_LIST} exact component={PilotsList}/>
        <Route path= {routes.CHANGE_PASS} exact component={ChangePass}/>
      </Switch>
    </div>
  )
}

export default Routes
