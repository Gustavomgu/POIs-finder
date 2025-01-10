import express from "express";
import { createPoint, getAllPoints, getAllClosePoints } from './controller.js';
const app = express()

app.use(express.json());

app.post('/', createPoint);

app.get('/GetAll', getAllPoints)

app.get('/GetAllClose', getAllClosePoints)

export default app;