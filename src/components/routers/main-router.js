import React, { useContext } from 'react';
import { Switch } from 'react-router';
import { CustomInput } from '../common/forms/customInput';
import { AuthContextAPI } from '../contexts/auth.context';
import { NonAuthRoute } from './non-auth-route';

import { UserRegistration } from '../pages/register/register';

const MainRouter = () => {
  const { auth } = useContext(AuthContextAPI);
  return (
    <div >
      <Switch>
        <CustomInput />
        <NonAuthRoute exact={true} path="/user-registration" component={UserRegistration} />
      </Switch>
    </div>
  );
}

export { MainRouter };
