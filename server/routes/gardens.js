import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.json({msg: "Get all gardens"})
})

router.get('/:id', (req, res) => {
    res.json({msg: "Get single garden"})
})

router.post('/', (req, res) => {
    res.json({msg: "POST a new garden"})
})

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