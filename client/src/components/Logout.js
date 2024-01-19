import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
      isAuthenticated && (
        <button className='btn-primary border border-gray-400 hover:border-gray-600' onClick = {() => logout() }>
          Sign Out
        </button>
      )
  )
}

export default LogoutButton