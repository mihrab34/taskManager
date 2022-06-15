require("dotenv").config();
const mongoose = require("mongoose");
const MONGODB_CLOUD_URI = "mongodb+srv://mira:mirabel@cluster0.uan1b.mongodb.net/taskmanager?retryWrites=true&w=majority";
mongoose.connect(MONGODB_CLOUD_URI, {});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected");
});
