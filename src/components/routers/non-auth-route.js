import React, { Fragment, useContext } from 'react';
import { Redirect, Route, useHistory } from 'react-router';
import { AuthContextAPI } from '../contexts/auth.context'
import { defaultRoutes } from "../../config/default-route.config";
import { get } from 'lodash';
import { Navbar } from '../shared/navbar';


const NonAuthRoute = ({
  component: Component,
  isTransparent = false,
  ...rest
}) => {
  const { auth, } = useContext(AuthContextAPI);
  let history = useHistory();
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Fragment>
            <Navbar />
            {auth.isLogged ? <Redirect to={get(history, "location.state.from", "") ? get(history, "location.state.from", "") : defaultRoutes[get(auth, "userType", "")]} />
              : <div className="main-router-non-auth">
                <Component {...props} />
              </div>
            }
          </Fragment>
        )
      }
      }
    />
  );
}
export { NonAuthRoute };