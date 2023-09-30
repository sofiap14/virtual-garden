import { useState } from "react";
import { useGardensContext } from "../hooks/useGardensContext";
import axios from "axios";

const CreateGardenForm = () => {
  const { dispatch } = useGardensContext();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [showForm, setShowCreateForm] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleCreateGarden = async (e) => {
    e.preventDefault();

    const garden = { title, location, description };

    try {
      const response = await axios.post("/gardens", garden);
      setTitle("");
      setLocation("");
      setDescription("");
      setError(null);
      console.log("new garden added", response.data);
      dispatch({ type: "CREATE_GARDEN", payload: response.data });
      setIsFormSubmitted(true);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  const showCreateForm = () => {
    setShowCreateForm(true);
    setIsFormSubmitted(false);
  };

  return (
    <div>
      <button onClick={showCreateForm}>Create Garden </button>
      {showForm && !isFormSubmitted && (
        <form className="create-garden" onSubmit={handleCreateGarden}>
          <h3>Add a new Garden</h3>
          <label>Garden Title: </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <label>Location: </label>
          <input
            type="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />

          <label>Description: </label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />

          <button>Add Garden</button>
          {error && <div className="error">{error}</div>}
        </form>
      )}
    </div>
  );
};

export default CreateGardenForm;