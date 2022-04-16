const getAllTasks = (req, res) => {
  res.send('all tasks');
};

const createTask = (req, res) => {
  res.send('Create a task');
};

const getTask = (req, res) => {
  res.send('Get a single task');
};

const updateTask = (req, res) => {
  res.send('Update a Task');
};

const deleteTask = (req, res) => {
  res.send('Delete a Task');
};

module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};
