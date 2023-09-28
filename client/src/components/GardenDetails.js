import DeleteGarden from "./DeleteGarden"
import UpdateGardenForm from "./UpdateGardenForm"

const GardenDetails = ({ garden }) => {
    return (
        <div className="garden-details">
            {garden && (
                <>
                    <button><h4>{garden.title}</h4></button>
                    <p><strong>Location:</strong> {garden.location}</p>
                    <p><strong>About the Garden:</strong> {garden.description}</p>
                    <UpdateGardenForm garden={garden} />
                    <DeleteGarden garden={garden}/>
                </>
            )}
        </div>
    )
}

export default GardenDetails