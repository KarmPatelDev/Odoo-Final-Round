import express from "express";
import { isAdmin, isLibrarian, isUser, requireSignIn } from "../middlewares/authMiddleware.js";
import { registerController, loginController, logoutController, forgotPasswordController, updateProfileController } from "../controllers/authController.js";

// Router Object
const router = express.Router();

// Routing

// Register
router.post("/register", registerController);

// Login
router.post("/login", loginController);

// Logout
router.get("/logout", requireSignIn, logoutController);

// Forgot Password
router.post("/forgot-password", forgotPasswordController);

// Update Profile
router.put("/update-profile", requireSignIn, updateProfileController);

// Admin
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ok: req.ok});
});

// Admin
router.get("/librarian-auth", requireSignIn, isLibrarian, (req, res) => {
    res.status(200).send({ok: req.ok});
});

// Admin
router.get("/user-auth", requireSignIn, isUser, (req, res) => {
    res.status(200).send({ok: req.ok});
});

export default router;