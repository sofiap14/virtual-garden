import { useEffect } from "react";
import axios from 'axios';
import { useGardensContext } from '../hooks/useGardensContext';
import { useAuth0 } from '@auth0/auth0-react';
import GardenDetails from "../components/GardenDetails";
import Navbar from "../components/NavBar";

const Home = () => {
  const { gardens, dispatch } = useGardensContext();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    const fetchGardens = async () => {
      try {
        const response = await axios('/gardens/', { withCredentials: true });
        const json = response.data;
        dispatch({ type: 'SET_GARDENS', payload: json });
      } catch (error) {
        console.log('error: ', error.message);
      }
    };

    if (isAuthenticated) {
      fetchGardens();
    }

  }, [isAuthenticated, dispatch]);

  return (
    <div className="Home">
      {isAuthenticated ? (
        <div className="gardens">
          <Navbar />
          {gardens && gardens.map((garden) => (
            <GardenDetails key={garden._id} garden={garden} />
          ))}
        </div>
      ) : (
        <div className="login-container">
          <p>Please log in to access this content</p>
          <button className="btn-primary" onClick={() => loginWithRedirect()}>Log In</button>
        </div>
      )}
    </div>
  );
};

export default Home;