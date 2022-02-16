import React, { useContext } from 'react';
import { AuthContextAPI } from '../contexts/auth.context';
import { UpdateStock } from '../../pages/stock-management/update-stock';
import { ItemRegistration } from '../../pages/item-management/item-registration';
import { Redirect, Route, Switch } from 'react-router';
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
        <Route exact={true} path="/" component={() => <Redirect to={{ pathname: '/signin' }} />} />
        <NonAuthRoute path="/signin" exact={true} component={SignIn} />

        <AuthRoute path="/dashboard" isSidebar={true} allowed={[userTypes.Admin]} exact={true} component={Dashboard} />
        <AuthRoute path="/stock" isSidebar={true} allowed={[userTypes.Admin]} exact={true} component={Stock} />
        <AuthRoute path="/update-stock" isSidebar={true} allowed={[userTypes.Admin]} exact={true} component={UpdateStock} />
        <AuthRoute path="/item-registration" isSidebar={true} allowed={[userTypes.Admin]} exact={true} component={ItemRegistration} />
      </Switch>
    </div>
  );
}

export { MainRouter };
