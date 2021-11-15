import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import postRoutes from '../routes/posts'

dotenv.config()
//amdal

// application configuration
const app: Application = express();
const PORT: number | string = process.env.PORT || 8000;
const connectionUrl: string | any = process.env.DATA_BASE_URI;
// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use('/posts', postRoutes)

// database connection

mongoose.connect(connectionUrl).then(
    () => (console.log("connection successful"))
).catch(
    (error) => (console.log(error))
)

// application routing
app.get("/", (req: Request, res: Response): void => {
    res.send("Hello Typescript with Node.js!")
});

// listeners
app.listen(PORT, (): void => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
});

//nnn