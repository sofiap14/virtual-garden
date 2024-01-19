import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className='btn-primary flex w-3/4 justify-center' onClick={() => loginWithRedirect({ redirectUri: `${window.location.origin}/home`, appState: {returnTo: window.location.href} })}>
        Log In
      </button>
    )
  );
}

export default LoginButton;
