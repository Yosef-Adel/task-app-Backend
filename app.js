const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config()
const port = process.env.PORT || 3001 
app.use(express.json())
app.use((req,res, next)=>{
    console.log(req.body)
    next()
})
app.use('/api/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)
const start = async ()=>{
    try{
        await connectDB(process.env.DB_URL)
        app.listen(port, console.log(`Server is listening on port ${port}...`))

    }
    catch (error){
        console.log(error)
    }
}

start()