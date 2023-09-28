import { useState } from "react";
import axios from "axios";

const DeleteGarden = ({garden}) => {
    const [error, setError] = useState(null)

    const handleDelete = async (e) => {
        e.preventDefault();
    
        try { 
            const response = await axios.delete(`/gardens/${garden._id}`, garden)
            console.log(`deleted ${garden.title}`, response.data)
        } catch (err) {
            setError(err.response.data.error)
        }
    }

    return(
        <div>
            <button onClick={handleDelete}>Delete</button>
            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default DeleteGarden;