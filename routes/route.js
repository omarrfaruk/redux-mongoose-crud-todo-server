const express = require('express');
const hobbiesModel = require('../schema/hobbiesSchema');
const router = express.Router()


router.post('/hobby', async (req, res) => {
    const hobby = req.body

    try {
        const newHobby = await hobbiesModel.create(hobby)
        res.status(200).json(newHobby)
    } catch (error) {
        res.status(400).json('something wrong')
    }

})

router.get('/hobby', async (req, res) => {

    try {
        const hobbies = await hobbiesModel.find({})
        res.status(200).json(hobbies)
    } catch (error) {
        res.status(400).json('something wrong')
    }
})

router.delete("/hobby/:id", async (req, res) => {
    const hobbies = await hobbiesModel.findById(req.params.id);

    if (!hobbies) return res.status(404).send("hobbies not found...");

    const deletedHobbies = await hobbies.deleteOne({ _id: req.params.id });

    res.send(deletedHobbies);
});

router.put("/hobby/:id", async (req, res) => {
    try {
        const updateHobby = await hobbiesModel.findById(req.params.id)
        Object.assign(updateHobby, req.body)
        updateHobby.save()
        res.status(200).json(updateHobby)
    } catch (error) {
        res.status(400).json('something wrong')
    }
})

module.exports = router