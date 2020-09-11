import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Home from './features/home/Home';
import Login from './features/account/Login';
import AccessDenied from './pages/AccessDenied';
import AppRoute from './utils/AppRoute';
import PublicLayout from './layouts/PublicLayout';
import AuthLayout from './layouts/AuthLayout';
import { NotFoundPage } from './pages/NotFoundPage';
import { LogoutPage } from './features/account/Logout';
import { IonRouterOutlet } from "@ionic/react";

const AppRouter: React.FC = () => {
  const getTitle = (page: string) => {
    return `InvasivesBC - ${page}`;
  };
  return (
    <IonRouterOutlet id="main">
      <Switch>
        <Redirect exact from="/" to="/login" />
        <AppRoute
            path="/login"
            title={getTitle('Login')}
            component={Login}
            layout={PublicLayout}
        ></AppRoute>
        <AppRoute path="/logout" title={getTitle('Logout')} component={LogoutPage}></AppRoute>
        <AppRoute
            path="/forbidden"
            title={getTitle('Forbidden')}
            component={AccessDenied}
            layout={PublicLayout}
        ></AppRoute>
        <AppRoute
            path="/page-not-found"
            title={getTitle('Page Not Found')}
            component={NotFoundPage}
            layout={PublicLayout}
        ></AppRoute>
        <AppRoute
            protected
            path="/home"
            component={Home}
            layout={AuthLayout}
            title={getTitle('Home')}
        />
        <AppRoute title="*" path="*" component={() => <Redirect to="/page-not-found" />} />
      </Switch>
    </IonRouterOutlet>
  );
};

export default AppRouter;
