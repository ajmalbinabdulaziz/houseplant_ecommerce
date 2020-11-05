import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

// @desc    Auth user & get token
// @routes  POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    res.send({email, password})
})

export {
    authUser
}