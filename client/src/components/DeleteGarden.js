import { useState } from "react";
import axios from "axios";
import { useGardensContext } from "../hooks/useGardensContext";

const DeleteGarden = ({garden}) => {
    const { dispatch } = useGardensContext()
    
    const [error, setError] = useState(null)

    const handleDelete = async (e) => {
        e.preventDefault();
    
        try { 
            const response = await axios.delete(`/gardens/${garden._id}`, garden)
            console.log(`deleted ${garden.title}`, response.data)
            dispatch({type: 'DELETE_GARDEN', payload: garden})
        } catch (err) {
            setError(err.response.data.error)
        }
    }

    return(
        <div>
            <button className="btn-primary" onClick={handleDelete}>Delete</button>
            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default DeleteGarden;