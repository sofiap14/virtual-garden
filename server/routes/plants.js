import express from "express";
import { createPlant,
        getAllPlants,
        getPlant,
        deletePlant,
        updatePlant} from "../controllers/plantController.js";

const router = express.Router();

// Get all plants in the Garden
router.get('/', getAllPlants);

// Get specific plant
router.get('/:plantId', getPlant);

// Create new plant
router.post('/', createPlant);

// Delete a plant
router.delete('/:plantId', deletePlant);

// Update a plant
router.patch('/:plantId', updatePlant);

export default router;