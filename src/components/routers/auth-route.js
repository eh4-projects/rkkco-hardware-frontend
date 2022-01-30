import React, { Fragment, useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { isAllowed } from '../../helpers/isAllowed.helper';
import { PageNotFound } from '../common/utils/page-not-found';
import { AuthContextAPI } from '../contexts/auth.context'
import { Sidebar } from '../shared/sidebar';
import { Navbar } from '../shared/navbar';

const AuthRoute = ({
  component: Component,
  allowed = [],
  isSidebar = false,
  isTransparent=false,
  ...rest
}) => {
  const { auth, } = useContext(AuthContextAPI);
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Fragment>
            <Navbar isTransparent={isTransparent} />
            {auth.isLogged ?
              (isAllowed(allowed, auth.userType)
                ? <div className={(isSidebar ? "main-router-auth" : 'main-router-non-auth')}>
                  {isSidebar ? <Sidebar /> : null}
                  <Component {...props} />
                </div>
                : <PageNotFound />) :
              <Redirect to={{
                pathname: '/login',
                state: { from: rest.path }
              }} />}
          </Fragment>
        )
      }
      }
    />

  );
}
export { AuthRoute };