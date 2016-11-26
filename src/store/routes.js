import React from 'react';
import { Route, IndexRedirect, Redirect } from 'react-router';
import App from 'containers/app';
import Foo from 'containers/foo';

export default (
  <Route path="/" component={ App }>
    <IndexRedirect to="foo" />
    <Route path="foo" component={ Foo }/>
    <Redirect from="*" to="/" />
  </Route>
);
