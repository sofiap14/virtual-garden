import { useEffect, useState } from "react";
import axios from 'axios';
import { useGardensContext } from '../hooks/useGardensContext'

// components
import GardenDetails from "../components/GardenDetails"
import Login from "../components/Login";
import Navbar from "../components/NavBar";

const Home = () => {

  const {gardens, dispatch} = useGardensContext()

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchGardens = async () => {
      try{
        const response = await axios('/gardens/', { withCredentials: true }).catch(err => { console.log(err) });
        const json = response.data;
        dispatch({type:'SET_GARDENS', payload: json})
        setIsAuthenticated(true)
      } catch (error) {
        if (error.response && error.response === 401) {
          setIsAuthenticated(false);
        } else {
          console.log('error: ', error.message);
        }
      }

    };

    fetchGardens();
  }, [dispatch]);

  return (
    <div className="Home">
      <Navbar />
      {isAuthenticated ? (
        <div className="gardens">
          { gardens && gardens.map((garden) => (
            <GardenDetails key={garden._id} garden={garden} />
          ))}
        </div>
      ) : (
        <div>Please log in to access this content <Login /></div>
      )}
    </div>
  );
};

export default Home;