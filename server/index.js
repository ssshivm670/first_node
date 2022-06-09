import  express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todoRoutes from './routes/todos.js';
const app =express();
dotenv.config();
app.use(express.json({extended: true}))
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use('/todos', todoRoutes );

// const mongodb = "mongodb+srv://admin:admin123@firstnode.g36tb.mongodb.net/todos-database?retryWrites=true&w=majority"

app.get('/',(req, res)=>{
    res.send("Welcome")
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.mongodb)
    .then(()=>{
        app.listen(PORT);
        console.log(`server is running on port ${PORT}`);
    })
    .catch(err=>console.error(err))