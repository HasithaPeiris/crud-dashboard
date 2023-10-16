const express = require("express");
const router = express.Router();
const {
  getSuppliers,
  getSupplier,
  addSupplier,
  updateSupplier,
  deleteSupplier,
} = require("../controllers/supplierController");

router.route("/").get(getSuppliers).post(addSupplier);

router.route("/find/:id").get(getSupplier);

router.route("/:id").put(updateSupplier).delete(deleteSupplier);

module.exports = router;
