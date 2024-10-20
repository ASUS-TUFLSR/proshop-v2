import asyncHandler from "../middleware/asyncHandler.js" 
import User from '../models/userModel.js'

//@ desc auth user & get token
// @route GET /api/users/login
// @access Public

const authUser = asyncHandler(async (req, res)  => {
     res.send('auth User')
 })

//@ desc  Register User
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res)  => {
     res.send('Register User')
 })
 //@ desc  Logout User / clear Cookie
// @route POST /api/users/logout
// @access Private

const logOutUser = asyncHandler(async (req, res)  => {
     res.send('logout User')
 })

//@ desc  GET User Profile
// @route GET /api/users/profile
// @access Private

const getUserProfile = asyncHandler(async (req, res)  => {
     res.send('get User profile')
 })

//@ desc  Update User Profile
// @route PUT /api/users/profile
// @access Private

const updateUserProfile = asyncHandler(async (req, res)  => {
     res.send('update Users profile')
 })

//@ desc  GET User
// @route GET /api/users
// @access Private/admin

const getUsers = asyncHandler(async (req, res)  => {
     res.send('get Users')
 }) 

//@ desc  GET User by id
// @route GET /api/users/:id
// @access Private/admin

const getUserByID = asyncHandler(async (req, res)  => {
     res.send('get User by id')
 }) 

//@ desc  Delete Users
// @route DELETE /api/users/:id 
// @access Private/admin

const DeleteUser = asyncHandler(async (req, res)  => {
     res.send('delete User')
 }) 

//@ desc  update User
// @route PUT /api/users/:id 
// @access Private/admin

const updateUser = asyncHandler(async (req, res)  => {
     res.send('update user')
 }) 

export  { authUser, 
          registerUser, 
          logOutUser, 
          getUserProfile,
          updateUserProfile,
          getUsers, 
          getUserByID,
          DeleteUser, 
          updateUser} 