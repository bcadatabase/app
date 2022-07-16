import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/coustom.css";

import Router from "views/Router.js";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Router} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
