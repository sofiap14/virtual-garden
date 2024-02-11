import { useAuth0 } from '@auth0/auth0-react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/NavBar";
import PlantList from "../components/PlantList";

const GardenPage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { id } = useParams();
  console.log('garden id: ', id)

  return (
    <div className="Home">
      <Navbar />
      {isAuthenticated ? (
        <PlantList gardenId={id} />
      ) : (
        <div className="login-container">
          <p>Please log in to access this content</p>
          <button className="btn-primary" onClick={() => loginWithRedirect()}>Log In</button>
        </div>
      )}
    </div>
  );
};

export default GardenPage;
