import React, { useContext } from 'react';
import { AuthContextAPI } from '../contexts/auth.context';
import { Redirect, Route, Switch } from 'react-router';
import { NonAuthRoute } from './non-auth-route';
import { AuthRoute } from './auth-route';
import { SignIn } from '../../pages/signin/singin';
import { userTypes } from '../../config/user-type.config';
import { Dashboard } from '../../pages/dashboard/dashboard';
import { Quotation } from '../../pages/quotation/quotation';
import { ItemRegistration } from '../../pages/item-management/item-registration';
import { ItemList } from '../../pages/item-management/item-list';
import { UpdateStock } from '../../pages/stock-management/update-stock';
import { StockOverview } from '../../pages/stock-management/stock-overview';
import { DailyReports } from '../../pages/daily-reports/daily-reports';
import { HomeLobby } from '../../pages/home/home-lobby';
import { BillingHome } from '../../pages/billing/billing-main-page';
import { ItemBrandRegistration } from '../../pages/item-brand-registration/item-brand-registration';
import { ItemCategoryRegistration } from '../../pages/item-category-registration/item-category-registration'

const MainRouter = () => {
  const { auth } = useContext(AuthContextAPI);
  return (
    <div >
      <Switch>
        <Route exact={true} path="/home" component={HomeLobby} />
        <Route exact={true} path="/" component={() => <Redirect to={{ pathname: '/signin' }} />} />
        <NonAuthRoute path="/signin" exact={true} component={SignIn} />
        <AuthRoute path="/dashboard" isSidebar={true} allowed={[userTypes.Admin]} exact={true} component={Dashboard} />
        <NonAuthRoute path="/stock-overview" isSidebar={true} exact={true} component={StockOverview} />
        <AuthRoute path="/update-stock" isSidebar={true} allowed={[userTypes.Admin]} exact={true} component={UpdateStock} />
        <AuthRoute path="/item-registration" isSidebar={true} allowed={[userTypes.Admin]} exact={true} component={ItemRegistration} />
        <AuthRoute path="/items" isSidebar={true} allowed={[userTypes.Admin]} exact={true} component={ItemList} />
        <AuthRoute path="/quotation" isSidebar={true} allowed={[userTypes.Admin]} exact={true} component={Quotation} />
        <AuthRoute path="/daily-reports" isSidebar={true} exact={true} allowed={[userTypes.Admin]} component={DailyReports} />
        <AuthRoute path="/billing" isSidebar={true} allowed={[userTypes.Admin]} exact={true} component={BillingHome} />
        <AuthRoute path="/item-brand-registration" isSidebar={true} allowed={[userTypes.Admin]} exact={true} component={ItemBrandRegistration} />
        <AuthRoute path="/item-category-registration" isSidebar={true} allowed={[userTypes.Admin]} exact={true} component={ItemCategoryRegistration} />

      </Switch>
    </div>
  );
}

export { MainRouter };
