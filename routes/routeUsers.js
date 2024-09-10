const mongoose = require('mongoose');
const router = require('express').Router();
const User = require('../models/modelUsers');


//get all

router.get('/', async (req,res)=> {
    try{
    const users = await User.find();
    res.status(200).json(users);
 }
    catch (err) {
        res.status(500).json(err);

    }

})

//get by id
router.get('/:id', async (req,res)=> {
    const id = req.params.id;
    

})

//post user
router.post('/', async (req, res)=> {
    try{
        const newUser = new User({
            name: req.body.name,
            friends: req.body.friends
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch(err){
        res.status(500).json(err);
    }

})


//post user
router.delete('/:id', async (req, res)=> {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);
    res.json(deletedUser);
})

module.exports = router;