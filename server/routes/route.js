import express from "express"
import { addUser,getUsers,getUser,editData, deleteUser } from "../controller/user-controller.js";

const router = express.Router();

router.post("/add",addUser);
router.get("/all",getUsers);
router.get("/:id",getUser);  // get data for edit
router.put("/:id",editData); // for update
router.delete("/:id",deleteUser)
export default router;