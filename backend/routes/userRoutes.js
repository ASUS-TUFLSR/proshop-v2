import express from "express";
const router = express.Router();
import { authUser, 
          registerUser, 
          logOutUser, 
          getUserProfile,
          updateUserProfile,
          getUsers, 
          getUserByID,
          DeleteUser, 
          updateUser } from "../controllers/userController.js";

router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logOutUser);
router.post('/login', authUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').delete(DeleteUser).get(getUserByID).put(updateUser);


export default router;