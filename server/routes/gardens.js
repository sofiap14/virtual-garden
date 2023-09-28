import express from "express";
import { 
    createGarden,
    getAllGardens,
    getGarden,
    deleteGarden,
    updateGarden } from '../controllers/gardenController.js';

const router = express.Router();

router.get('/', getAllGardens);

router.get('/:id', getGarden);

router.post('/', createGarden);

router.delete('/:id', deleteGarden);

router.patch('/:id', updateGarden);

export default router;