import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import React from 'react';
import {Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Home from './components/Home';

const config = {
  clientId: '0oa2wpnf58qdhBc7p5d7',
  issuer: 'https://dev-40302722.okta.com',
  redirectUri: 'http://localhost:3000/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};
const oktaAuth = new OktaAuth(config);
const App: React.FC = () => {
  const history = useHistory();
  console.log("hostory",history);
  
  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };
  return (

      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <Switch>
          <Route exact path='/login/callback' component={LoginCallback} />
          <SecureRoute exact path='/editesting' component={Home} />
          <Route exact path='/' >
            <Redirect to='/editesting' />
          </Route>
        </Switch>
      </Security>
 
  );
};

export default App;