import { useEffect, useState } from "react";
import axios from 'axios';

// components
import GardenDetails from "../components/GardenDetails"

const Home = () => {
  const [gardens, setGardens] = useState(null);

  useEffect(() => {
    const fetchGardens = async () => {
      const response = await axios('/gardens/').catch(err => {console.log(err)});
      const json = response.data;
      setGardens(json);
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