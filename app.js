const express = require('express');
const req = require('express/lib/request');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./DB/dbconnection');
require('dotenv').config();

const port = process.env.PORT || 3000;
const db_URI =
  'mongodb+srv://shoaib:a123@cluster0.6bk6n.mongodb.net/TASK_MANAGER?retryWrites=true&w=majority';
//middleware
app.use(express.json());
app.use(express.static('./public'));
app.use('/api/v1/tasks', tasks);

// app.get('api/v1/tasks')          -get all tasks
// app.post('api/v1/tasks')         -create a new task
// app.get('api/v1/tasks/:id')      -get single task
// app.patch('api/v1/tasks/:id')    -update task
// app.delete('api/v1/tasks/:id')   -delete a task
const start = async () => {
  await connectDB(db_URI);
  console.log('Connected TO DataBase SuccessFully');
  app.listen(port, () => {
    console.log(`Server is listening to requests on http://localhost:${port}`);
  });
};

start();
