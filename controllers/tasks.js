const Task = require('../models/tasks');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}).sort({ createdAt: -1 });
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(500).json('Post doesnt exists in Database');
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateTask = async (req, res) => {
  try {
    const id = req.params.id;

    const checktask = await Task.findById(id);
    if (!checktask) {
      return res.status(500).json('Dosesnt exist in DB');
    }
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      //It will Validate according to schema and return the updated Schema
      //Other wise it will not validated according to schema and also return the old schema on successfull update
      { runValidators: true, new: true }
    );
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(500).json('Dosesnt exist in DB');
    }
    await Task.findByIdAndDelete(id);
    res.status(200).json('successFully Deleted');
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};
