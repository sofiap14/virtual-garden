import { Link } from 'react-router-dom'

const PlantDetails = ({ garden, plant }) => {
    return (
        <div className="flex-1 flex-row gap-5">
            {garden && plant && (
                <>
                    <div className="p-4 bg-gray-50 rounded-md">
                        <Link to={`/gardens/${garden._id}/plants/`}><h4>{plant.plantname}</h4></Link>
                        <p><strong>Location:</strong> {plant.scientificname}</p>
                        <p><strong>About the Garden:</strong> {plant.plantingDate}</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default PlantDetails