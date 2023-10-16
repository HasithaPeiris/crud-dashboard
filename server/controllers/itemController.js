const Item = require("../models/itemModel");

// @desc    Add Item
// @route   POST /api/items
// @access  Private
const addItem = async (req, res) => {
  const newItem = new Item(req.body);

  try {
    const savedItem = await newItem.save();
    res.status(200).json(savedItem);
  } catch (err) {
    res.status(500).json(err);
  }
};

// @desc    Update Item by ID
// @route   PUT /api/items/:id
// @access  Private
const updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(500).json(err);
  }
};

// @desc    Delete Item by ID
// @route   DELETE /api/items/:id
// @access  Private
const deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json("Item has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

// @desc    Get Item by ID
// @route   GET /api/items/find/:id
// @access  Public
const getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json(err);
  }
};

// @desc    Get Items
// @route   GET /api/items
// @access  Public
const getItems = async (req, res) => {
  try {
    const items = await Item.find();

    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  addItem,
  updateItem,
  deleteItem,
  getItem,
  getItems,
};
