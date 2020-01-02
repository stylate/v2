import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

// project writeups
import { ClothSim } from "../routes";

const routes = [
  {
    path: "/",
    exact: true,
    output: () => <Home />
  },
  {
    path: "/clothsim",
    output: () => <ClothSim />
  }
];

export const Main = () => (
  <div>
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          children={<route.output />}
        />
      ))}
    </Switch>
  </div>
);
