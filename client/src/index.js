import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GardensContextProvider } from './context/GardenContext';
import { Auth0Provider } from '@auth0/auth0-react';

// const domain = process.env.AUTH0_DOMAIN
// const clientId = process.env.AUTH0_CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-3d7khky18hr8ibf3.us.auth0.com'
      clientId='V4ZXAkvQ2j0RRwsRW3Enh9WgjGYIDg8F'
      redirectUri={window.location.origin + '/home'}
    >
      <GardensContextProvider>
        <App />
      </GardensContextProvider>
    </Auth0Provider>
    </React.StrictMode>
);