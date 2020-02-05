import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import App from './components/pages/App';
import Test from './components/pages/Test';

const onEnter = () => {
  console.log('top');
  window.scrollTo(0, 0);
};

const AppRouter = () => (
  <Router>
    <Fragment>
      <Route
        path="/"
        exact
        component={App}
        onEnter={onEnter}
      />
      <Route
        path="/pippo"
        exact
        component={Test}
        onEnter={onEnter}
      />
    </Fragment>
  </Router>
);

export default AppRouter;
