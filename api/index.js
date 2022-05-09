const express = require('express')
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

const taskRouter = require('./src/routes/tasksRoute')
app.use('/api/tasks', taskRouter);


app.listen(5000, ()=> {
    console.log('Listening on port 5000');
})