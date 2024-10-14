import express from "express";
import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  deleteUserById,
  getUserById,
  updateUserById,
} from "../controllers/userController.js";
const router = express.Router();
import {
  authenticate,
  authorziedAdmin,
} from "../middlewares/authMiddleware.js";

router
  .route("/")
  .post(createUser)
  .get(authenticate, authorziedAdmin, getAllUsers);
router.post("/auth", loginUser);
router.post("/logout", logoutCurrentUser);
router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile);

//Admin routes
router
  .route("/:id")
  .delete(authenticate, authorziedAdmin, deleteUserById)
  .get(authenticate, authorziedAdmin, getUserById)
  .put(authenticate, authorziedAdmin, updateUserById);

export default router;
