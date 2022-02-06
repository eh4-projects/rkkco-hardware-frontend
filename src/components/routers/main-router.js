import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { CustomInput } from '../common/forms/customInput';
import { AuthContextAPI } from '../contexts/auth.context';
import { NonAuthRoute } from './non-auth-route';
import { AuthRoute } from './auth-route';
import { NormalRoute } from './normal-route';
import { SignIn } from '../../pages/signin/singin';
import { userTypes } from '../../config/user-type.config';
import { Dashboard } from '../../pages/dashboard/dashboard';
import { Stock } from '../../pages/stock/stock';

const MainRouter = () => {
  const { auth } = useContext(AuthContextAPI);
  return (
    <div >
      <Switch>
      <Route  exact={true} path="/" component={()=><Redirect to={{
                pathname: '/signin',
              }} />}  />
      <NonAuthRoute  exact={true} path="/signin" component={SignIn} />
      <AuthRoute isSidebar={true} allowed={[userTypes.Admin]} exact={true} path="/dashboard" component={Dashboard} />
      <AuthRoute isSidebar={true} allowed={[userTypes.Admin]} exact={true} path="/stock" component={Stock} />
      </Switch>
    </div>
  );
}

export { MainRouter };
