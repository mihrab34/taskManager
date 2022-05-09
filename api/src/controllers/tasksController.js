const Task = require('../models/task');

const makeResponse = (status = 200) => ({
  success: true,
  message: "OK",
  data: [],
  status: status,
});

exports.index = async(req, res) => {
  let response = makeResponse();
  response.data = await Task.find({})
  return res.status(response.status).json(response.data);
};

exports.add = async(req, res) => {
  let response = makeResponse(201);
  const task = new Task(req.body)
  await task.save();
  return res.status(response.status).json(response);
};

exports.edit = (req, res) => {
  let response = makeResponse();
  return res.status(response.status).json(response);
};

exports.getTask = (req, res) => {
  let response = makeResponse();
  const id = req.params.id
  return res.status(response.status).json(response);
};

exports.delete = (req, res) => {
  let response = makeResponse();
  return res.status(response.status).json(response);
};

exports.clear = (req, res) => {
  let response = makeResponse();
  return res.status(response.status).json(response);
};

exports.toggleCompleted = (req, res) => {
  let response = makeResponse();
  return res.status(response.status).json(response);
};
