import { useState } from "react";
import { useGardensContext } from "../hooks/useGardensContext";
import axios from "axios";

const UpdateGardenForm = ({ garden }) => {
  const { dispatch } = useGardensContext();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  // eslint-disable-next-line 
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleUpdateGarden = async (e) => {
    e.preventDefault();

    if (!title || !location || !description) {
      setError("All fields are required");
      setTimeout(() => {
        setError(null);
      }, 1500);
      return;
    }

    const updatedGarden = { _id: garden._id, title, location, description };

    try {
      // eslint-disable-next-line 
      const response = await axios.patch(`/gardens/${garden._id}`, updatedGarden);
      dispatch({ type: "UPDATE_GARDEN", payload: updatedGarden });
      setError(null);
      setSuccessMessage("Garden updated successfully!");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 1500);
      setIsFormSubmitted(true);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <>
        <button
          className="btn-primary"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Update
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Update</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body of the pop up - update form*/}
                  <div className="relative p-6 flex-auto">
                    <form className="flex flex-col" onSubmit={handleUpdateGarden}>
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

                      {/*footer*/}
                      <div className="flex items-center justify-end p-5 border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="btn-primary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                    <div className="text-red">
                          {successMessage && <div className="text-green-800 flex justify-center">{successMessage}</div>}
                          {error && <div className="text-red-800 flex justify-center">{error}</div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
      </div>
  );
};

export default UpdateGardenForm;