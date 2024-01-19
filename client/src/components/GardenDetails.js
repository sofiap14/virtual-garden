import DeleteGarden from "./DeleteGarden"
import UpdateGardenForm from "./UpdateGardenForm"
import { Link } from 'react-router-dom'

const GardenDetails = ({ garden }) => {
    return (
        <div className="flex-1 flex-row gap-5">
            {garden && (
                <>
                    <div className="p-4 bg-gray-50 rounded-md">
                        <Link to={`/gardens/${garden._id}/plants/`}><h4>{garden.title}</h4></Link>
                        <p><strong>Location:</strong> {garden.location}</p>
                        <p><strong>About the Garden:</strong> {garden.description}</p>
                        <div className="ml-auto flex flex-row gap-2">
                            <UpdateGardenForm garden={garden} />
                            <DeleteGarden garden={garden}/>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default GardenDetails