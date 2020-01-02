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
    path: "/hex",
    output: () => {
      window.location.href =
        "https://www.notion.so/Audio-Visualization-with-three-js-0d7117978b29484e8f356625d70e1cbd";
      return null;
    }
  },
  {
    path: "/clothsim",
    output: () => <ClothSim />
  },
  {
    path: "/crawler",
    output: () => {
      window.location.href =
        "https://github.com/stylate/AudioCrawler";
      return null;
    }
  },
];

export const Main = () => (
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
);
