import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.json({msg: "GET all plants in garden"})
})

router.get('/:id', (req, res) => {
    res.json({msg: "Get single plant"})
})

router.post('/', async (req, res) => {
    const {plantname, scientificname, plantingDate} = req.body
    try {
        const plant = await Plant.create({plantname, scientificname, plantingDate})
        res.status(200).json(plant)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

export default router;