import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// UPDATE
router.get("/checkauthentication", verifyToken, (req,res,next)=>{

    res.send("You are logged in!");
});

router.get("/checkuser/:id", verifyUser,  (req,res,next)=>{
    res.send("you are logged in and ready to delete account");
});

router.get("/checkadmin/:id", verifyAdmin,  (req,res,next)=>{
    res.send("Hello admin, you are ready to delete account");
});


router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL

router.get("/",verifyAdmin, getAllUser);





export default router;