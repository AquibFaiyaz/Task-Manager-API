const express = require("express");
const app = express();

const tasks = require("./routes/tasks");

const connectDB = require("./db/connect");
require("dotenv").config();

//middleware
app.use(express.json());

//Routes
app.use("/api/v1/tasks", tasks);

const port = 3000;
const url = process.env.MONGO_URI;
const start = async () => {
  try {
    await connectDB(url);
    app.listen(3000, () => {
      console.log(`Server up and running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
