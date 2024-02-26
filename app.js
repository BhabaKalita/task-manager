require('./db/connect')
require('dotenv').config()
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Task Manager ");
})

app.use('/api/v1/tasks',tasks);
app.use(notFound)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening to ${port}...`)
        });
    } catch(error) {
        console.log("Connection ERROR!!! "+error);
    }
}



// app.listen(port, ()=>{
//     console.log(`Listening into ${port}...`);
// })

start();