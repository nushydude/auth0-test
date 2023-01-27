import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Login, Logout } from "../pages";

export const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
    </Switch>
  );
};
