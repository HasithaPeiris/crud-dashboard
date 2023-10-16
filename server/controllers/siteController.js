const Site = require("../models/siteModel");

// @desc    Add Site
// @route   POST /api/sites
// @access  Private
const addSite = async (req, res) => {
  const newSite = new Site(req.body);

  try {
    const savedSite = await newSite.save();
    res.status(200).json(savedSite);
  } catch (err) {
    res.status(500).json(err);
  }
};

// @desc    Update Site by ID
// @route   PUT /api/sites/:id
// @access  Private
const updateSite = async (req, res) => {
  try {
    const updatedSite = await Site.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedSite);
  } catch (err) {
    res.status(500).json(err);
  }
};

// @desc    Delete Site by ID
// @route   DELETE /api/sites/:id
// @access  Private
const deleteSite = async (req, res) => {
  try {
    await Site.findByIdAndDelete(req.params.id);
    res.status(200).json("Site has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

// @desc    Get Site by ID
// @route   GET /api/sites/find/:id
// @access  Public
const getSite = async (req, res) => {
  try {
    const site = await Site.findById(req.params.id);
    res.status(200).json(site);
  } catch (err) {
    res.status(500).json(err);
  }
};

// @desc    Get Sites
// @route   GET /api/sites
// @access  Public
const getSites = async (req, res) => {
  try {
    const sites = await Site.find();

    res.status(200).json(sites);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getSites,
  getSite,
  addSite,
  updateSite,
  deleteSite,
};
