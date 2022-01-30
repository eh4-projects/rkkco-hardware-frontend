import React, { Fragment } from 'react';
import { Route } from 'react-router';
import { Navbar } from '../shared/navbar';

const NormalRoute = ({
  component: Component,
  isTransparent = false,
  ...rest
}) => {

  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Fragment >
            <Navbar isTransparent={isTransparent} />
            <Component />
          </Fragment>
        )
      }
      }
    />
  );
}
export { NormalRoute };