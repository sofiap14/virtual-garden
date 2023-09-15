import express from "express";
import createGarden from "../controllers/gardenController.js";

const router = express.Router();

// router.get('/', getAllGardens)

// router.get('/:gardenId', getGarden)

router.post('/', createGarden)

router.delete('/', (req, res) => {
    res.json({msg: "DELETE garden"})
})

router.delete('/:id', (req, res) => {
    res.json({msg: "DELETE a single garden only!"})
})

router.patch('/:id', (req, res) => {
    res.json({msg: "UPDATE a single garden"})
})

export default router;