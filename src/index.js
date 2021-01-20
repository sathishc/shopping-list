import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as serviceWorker from './serviceWorker';
import CssBaseline from "@material-ui/core/CssBaseline";

import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';

Amplify.addPluggable(new AmazonAIPredictionsProvider());
Amplify.configure(config);


const darkTheme = createMuiTheme({
  palette: 'primary'
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AmplifyAuthenticator>
          <App />
      </AmplifyAuthenticator>

    </ThemeProvider>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
