import { useEffect } from "react";
import axios from 'axios';
import { useGardensContext } from '../hooks/useGardensContext'

// components
import GardenDetails from "../components/GardenDetails"

const Home = () => {

  const {gardens, dispatch} = useGardensContext()

  useEffect(() => {
    const fetchGardens = async () => {
      const response = await axios('/gardens/').catch(err => {console.log(err)});
      const json = response.data;
      dispatch({type:'SET_GARDENS', payload: json})
    };

    fetchGardens();
  }, []);

  return (
    <div className="Home">
      <div className="gardens">
        { gardens && gardens.map((garden) => (
          <GardenDetails key={garden._id} garden={garden} />
        ))}
      </div>

    </div>
  );
};

export default Home;