import express from 'express';
import mongoose from 'mongoose';
import taskRouter from './routes/tasks.js';

const app = express();

app.use(express.json());
app.use("/", taskRouter)
mongoose
.connect('mongodb+srv://lusin:<password>@cluster1.qzutcwu.mongodb.net/')
.then(() => app.listen(5501))
.then(() =>
 console.log("Connected To Database and listening To localhost:5501"))
 .catch((err) => console.log(err));

