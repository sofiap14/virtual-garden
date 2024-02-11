import mongoose from "mongoose";
import Plant from "../models/plantModel.js";

// Create a new plant
const createPlant = async (req, res) => {
    const { plantname, scientificname, plantingDate } = req.body;
    const { gardenId } = req.params;

    try {
        const plant = await Plant.create({
            plantname,
            scientificname,
            plantingDate,
            garden: gardenId
        });
        res.status(200).json(plant);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Get all plants in a garden
const getAllPlants = async (req, res) => {
    const { gardenId } = req.params;
    try {
        const plants = await Plant.find({ garden: gardenId }).sort({ createdAt: -1 });
        
        if (plants.length === 0) {
            return res.status(200).json({ message: 'No plants found in this garden' });
        }

        res.status(200).json(plants);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching plants' });
    }
}


// Get a single plant
const getPlant = async (req, res) => {
    const { plantId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(plantId)) {
        return res.status(404).json({ error: 'No such plant exists' });
    }

    try {
        const plant = await Plant.findById(plantId);
        if (!plant) {
            return res.status(404).json({ error: 'No such plant exists' });
        }
        res.status(200).json(plant);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the plant' });
    }
}

// Delete a specific plant
const deletePlant = async (req, res) => {
    const { plantId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(plantId)) {
        return res.status(404).json({ error: 'No such plant exists' });
    }

    try {
        const deletedPlant = await Plant.findOneAndDelete({ _id: plantId });
        if (!deletedPlant) {
            return res.status(404).json({ error: 'No such plant exists' });
        }
        res.status(200).json(deletedPlant);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the plant' });
    }
}

// Update a specific plant
const updatePlant = async (req, res) => {
    const { plantId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(plantId)) {
        return res.status(404).json({ error: 'No such plant exists' });
    }

    try {
        const updatedPlant = await Plant.findOneAndUpdate({ _id: plantId }, {
            ...req.body
        }, { new: true });

        if (!updatedPlant) {
            return res.status(404).json({ error: 'No such plant exists' });
        }
        res.status(200).json(updatedPlant);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the plant' });
    }
}

export { createPlant, getAllPlants, getPlant, deletePlant, updatePlant };
