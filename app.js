import express from "express";
import { createPoint, getAllPoints, getAllClosePoints } from './controllers/controller.js';
const app = express()
import cors from "cors";

app.use(express.json());
app.use(cors());

app.post('/', createPoint);

app.get('/GetAll', getAllPoints)

app.get('/GetAllClose', getAllClosePoints)

export default app;