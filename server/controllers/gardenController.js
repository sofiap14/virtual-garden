import mongoose from "mongoose";
import Garden from "../models/gardenModel.js";

// get all gardens 
const getAllGardens = async (req, res) => {
    const gardens = await Garden.find({}).sort({createdAt: -1});
    res.status(200).json(gardens)
}

// get a single garden
const getGarden = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such garden exists'})
    }
    
    try {
        const garden = await Garden.findById(id);
        if (!garden) {
            return res.status(404).json({ error: 'No such garden exists' });
        }
        res.status(200).json(garden);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the garden' });
    }
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

// delete a specific garden
const deleteGarden = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such garden exists' });
    }

    try {
        const deletedGarden = await Garden.findOneAndDelete({ _id: id });

        if (!deletedGarden) {
            return res.status(404).json({ error: 'No such garden exists' });
        }

        res.status(200).json(deletedGarden);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the garden' });
    }
}

// update a specific garden
const updateGarden = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such garden exists'})
    }

    const updatedGarden = await Garden.findOneAndUpdate ({_id: id}, {
        ...req.body
    })

    if (!updatedGarden) {
        res.status(200).json({ message: 'No such garden exists' });        
    }
    res.status(200).json(updatedGarden)
}

export {createGarden, getAllGardens, getGarden, deleteGarden, updateGarden};