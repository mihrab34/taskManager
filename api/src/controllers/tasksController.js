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
  return res.status(response.status).json(response);
};

exports.add = async(req, res) => {
  let response = makeResponse(201);
  const task = new Task(req.body)
  await task.save();
  response.data = task;
  return res.status(response.status).json(response);
};

exports.edit = async(req, res) => {
  let response = makeResponse();
  const task = await Task.updateOne({_id: req.params.id}, req.body)
  response.data = task;
  return res.status(response.status).json(response);
};

exports.getTask = async(req, res) => {
  let response = makeResponse();
  response.data = await Task.findById(req.params.id)
  return res.status(response.status).json(response);
};

exports.delete = async(req, res) => {
  let response = makeResponse();
  response.data = await Task.deleteOne({_id:req.params.id})
  return res.status(response.status).json(response);
};

exports.clear = (req, res) => {
  let response = makeResponse();
  return res.status(response.status).json(response);
};

exports.toggleCompleted = async(req, res) => {
  let response = makeResponse();
  const task = await Task.findById(req.params.id)
  if(task.completed) {
    task.completed = false;
  }else {
    task.completed = true;
  }
  await task.save();
  response.data = task;
  return res.status(response.status).json(response);
};
