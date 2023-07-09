const express = require("express");
const router = express.Router();
const {
  SaveData,
  getAllProduct,
  getDataByID,
  updateData,
  deleteData,
} = require("../controller/prodeuctController");

/* save data*/
router.post("/", SaveData);

/* fetch data*/
router.get("/", getAllProduct);

/* fetch specific data*/
router.get("/:id", getDataByID);

/* update data*/
router.put("/:id", updateData);

// Delete data
router.delete("/:id", deleteData);

module.exports = router;
