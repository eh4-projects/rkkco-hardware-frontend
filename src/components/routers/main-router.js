import React, { useContext } from 'react';
import { AuthContextAPI } from '../contexts/auth.context';
import { UpdateStock } from '../../../src/components/stock-management/update-stock';
import { ItemRegistration } from '../../../src/components/item-management/item-registration';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Sidebar } from '../shared/sidebar';
import { Navbar } from '../shared/navbar';
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
      <Navbar />
      <Row style={{ maxWidth: '99.6vw' }}>
        <Col md={2}>
          <Sidebar />
        </Col>

        <Col md={10}>
          <Switch>
            <Route exact={true} path="/" component={() => <Redirect to={{ pathname: '/signin' }} />} />

            <AuthRoute path="/dashboard" isSidebar={true} allowed={[userTypes.Admin]} exact={true} component={Dashboard} />
            <AuthRoute path="/stock"  isSidebar={true} allowed={[userTypes.Admin]} exact={true} component={Stock} />

            <NonAuthRoute path="/signin" exact={true} component={SignIn} />
            <Route path="/update-stock" exact={true} component={UpdateStock} />
            <Route path="/item-registration" exact={true} component={ItemRegistration} />
          </Switch>
        </Col>

      </Row>
    </div>
  );
}

export { MainRouter };
