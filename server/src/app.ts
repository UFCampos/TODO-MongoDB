import express, { Express } from "express";
import mongoose from "mongoose";
import todoRoutes from "./routes";
import cors from "cors";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/todos", todoRoutes);

const PORT: string | number = process.env.PORT || 5000;

const uri: string = `mongodb+srv://urielcampos448:f7ULDMDR6I5O5J7s@cluster0.wvipfhi.mongodb.net/?retryWrites=true&w=majority`;

mongoose
    .connect(uri)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error);
    })