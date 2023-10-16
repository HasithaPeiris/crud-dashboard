const express = require("express");
const router = express.Router();
const {
  addItem,
  updateItem,
  deleteItem,
  getItem,
  getItems,
} = require("../controllers/itemController");

router.route("/").get(getItems).post(addItem);

router.route("/find/:id").get(getItem);

router.route("/:id").put(updateItem).delete(deleteItem);

module.exports = router;
