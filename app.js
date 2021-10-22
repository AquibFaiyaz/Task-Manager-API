const express = require("express");
const app = express();

const tasks = require("./routes/tasks");
//middleware
app.use(express.json());

//Routes
app.use("/api/v1/tasks", tasks);

const port = 3000;

app.listen(3000, () => {
  console.log(`Server up and running on port ${port}...`);
});
