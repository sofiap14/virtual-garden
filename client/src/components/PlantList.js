import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PlantList = () => {
  const [plants, setPlants] = useState([]);
  const { gardenId } = useParams();

  useEffect(() => {
    console.log('id: ', gardenId)
    const fetchPlants = async () => {
      try {
        const response = await axios(`/gardens/${gardenId}/plants/`, { withCredentials: true });
        console.log('fetching plant data', response);

        // Check if response.data is an array with length > 0
        if (Array.isArray(response.data) && response.data.length > 0) {
          setPlants(response.data);
        } else {
          // Handle the case when there are no plants
          console.log('No plants in this garden');
        }
      } catch (error) {
        console.log('error: ', error.message);
      }
    };

    fetchPlants();
  }, [gardenId]);

  return (
    <div>
      {gardenId && (
        plants.map((plant) => (
          <div key={plant._id}>
            <h3>{plant.plantname}</h3>
            <p>Scientific Name: {plant.scientificname}</p>
            <p>Planting Date: {new Date(plant.plantingDate).toLocaleDateString()}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default PlantList;
