const asyncHandler = require('express-async-handler');

const goal = require('../models/goalModel');
const User = require('../models/userModel');

const getGoals = asyncHandler(async (req, resp) => {
    const goals = await goal.find({ user: req.user.id })
    resp.status(200).json(goals)
})

const postGoals = asyncHandler(async (req, resp) => {
    if (!req.body.text) {
        resp.status(400)
        throw new Error('Please add a text field')
    }
    const goals = await goal.create({
        text: req.body.text,
        user: req.user.id,
    })
    resp.status(200).json(goals)
})

const putGoals = asyncHandler(async (req, resp) => {
    const Goal = await goal.findById(req.params.id)
    if (!Goal) {
        resp.status(400)
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)

    // check for user

    if (!user) {
        resp.status(401)
        throw new Error("User not found")
    }
    // make sure the logged in user matches the goal user 
    if (goals.user.toString() !== user.id) {
        resp.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    resp.status(200).json(updatedGoal)
})

const deleteGoals = asyncHandler(async (req, resp) => {
    const goals = await goal.findById(req.params.id)
    if (!goals) {
        resp.status(400)
        throw new Error('Goal not found')
    }


    const user = await User.findById(req.user.id)

    // check for user

    if (!user) {
        resp.status(401)
        throw new Error("User not found")
    }
    // make sure the logged in user matches the goal user 
    if (goals.user.toString() !== user.id) {
        resp.status(401)
        throw new Error('User not authorized')
    }


    await goals.deleteOne({ _id: req.params.id });
    resp.status(200).json({ id: req.params.id })
})

module.exports =
{
    getGoals,
    postGoals,
    putGoals,
    deleteGoals
}