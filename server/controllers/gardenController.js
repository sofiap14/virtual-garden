import Garden from "../models/gardenModel.js";

// get all gardens 
const getAllGardens = async (req, res) => {
    const gardens = await Garden.find({}.sort({createdAt: -1}))
    res.status(200).json(gardens)
}

// get a single garden
const getGarden = async (req, res) => {
    const { id } = req.params

    const garden = await Garden.findById(id)

    if (!garden){
        return res.status(404).json({error: 'No such garden exists'})
    } 

    res.status(200).json(garden)
}

// create a new garden
const createGarden = async (req, res) => {
    const {title, location, description} = req.body
    try {
        const garden = await Garden.create({title, location, description})
        res.status(200).json(garden)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a garden

// update a garden

export default createGarden;