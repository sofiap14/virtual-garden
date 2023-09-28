import {useState} from "react";
import axios from 'axios';

const UpdateGardenForm = ({garden}) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  
    const showUpdateForm = () => {
    setShowForm(true);
    };

    const handleUpdateGarden = async (e) => {
    e.preventDefault();

    const updatedGarden = { title, location, description };

    try {
      const response = await axios.patch(`/gardens/${garden._id}/`, updatedGarden)
      setTitle('');
      setLocation('');
      setDescription('');
      setError(null);
      console.log('updated garden', response.data);
    } catch (err) {
      setError(err.response.data.error)
    }
  };

  return (
    <div>
      <button onClick={showUpdateForm}> Update </button>
      {showForm && (
        <form className="update-garden" onSubmit={handleUpdateGarden}>
          <h3>Update Garden</h3>
          <label>New Garden Title: </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <label>New Location: </label>
          <input
            type="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />

          <label>New Description: </label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />

          <button>Update Garden</button>
          {error && <div className="error">{error}</div>}
        </form>
      )}
    </div>
  );
};

export default UpdateGardenForm;