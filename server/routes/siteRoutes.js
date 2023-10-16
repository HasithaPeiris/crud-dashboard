const express = require("express");
const router = express.Router();
const {
  getSites,
  addSite,
  getSite,
  updateSite,
  deleteSite,
} = require("../controllers/siteController");

router.route("/").get(getSites).post(addSite);

router.route("/find/:id").get(getSite);

router.route("/:id").put(updateSite).delete(deleteSite);

module.exports = router;
