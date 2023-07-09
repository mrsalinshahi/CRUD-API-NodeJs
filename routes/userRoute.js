const express = require("express");
const router = express.Router();
const {
  saveUser,
  getAllUser,
  getUserByID,
  updateUser,
  deleteUser,
} = require("../controller/userController");

/* save user*/
router.post("/", saveUser);

/* fetch user*/
router.get("/", getAllUser);

/* fetch specific user*/
router.get("/:id", getUserByID);

/* update user*/
router.put("/:id", updateUser);

// Delete user
router.delete("/:id", deleteUser);

module.exports = router;
