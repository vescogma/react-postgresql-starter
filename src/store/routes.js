import React from 'react';
import { Route, IndexRedirect, Redirect } from 'react-router';
import App from 'containers/app';
import Foo from 'containers/foo';
import Bar from 'containers/bar';

export default (
  <Route path="/" component={ App }>
    <IndexRedirect to="foo" />
    <Route path="foo" component={ Foo }/>
    <Route path="bar" component={ Bar }/>
    <Redirect from="*" to="/" />
  </Route>
);
