import { useState } from "react";
import { useGardensContext } from "../hooks/useGardensContext";
import axios from "axios";

const UpdateGardenForm = ({ garden }) => {
  const { dispatch } = useGardensContext();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  

  const handleUpdateGarden = async (e) => {
    e.preventDefault();

    if (!title || !location || !description) {
      setError("All fields are required");
      return;
    }

    const updatedGarden = {_id:garden._id, title, location, description };

    try {
      const response = await axios.patch(`/gardens/${garden._id}`, updatedGarden);
      dispatch({ type: "UPDATE_GARDEN", payload: updatedGarden });
      setError(null);
      console.log("updated garden", response.data);
      setIsFormSubmitted(true);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  const showUpdateForm = () => {
    setShowForm(true);
    setIsFormSubmitted(false);
  };

  return (
    <div>
      <button onClick={showUpdateForm}>Update</button>
      {showForm && !isFormSubmitted && (
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
            type="text"
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