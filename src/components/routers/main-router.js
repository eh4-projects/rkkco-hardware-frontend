import React, { useContext } from 'react';
import { Route, Switch } from 'react-router';
import { CustomInput } from '../common/forms/customInput';
import { AuthContextAPI } from '../contexts/auth.context';
import { UpdateStock } from '../../../src/components/stock-management/update-stock';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Sidebar } from '../shared/sidebar';
import { Navbar } from '../shared/navbar';

const MainRouter = () => {
  const { auth } = useContext(AuthContextAPI);
  return (
    <div>
      <Navbar />
      <Row style={{maxWidth: '99.6vw'}}>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={10}>
          <Switch>
            <Route exact={true} path="/update-stock" component={UpdateStock} />
          </Switch>
        </Col>
      </Row>
    </div>
  );
}

export { MainRouter };
