import express from "express";
import {Save, GetAll, GetAllCloseTo} from './service.js';

const app = express()
const port = 3000

app.use(express.json());

app.post('/', (req, res) => {
    const {name, pointX, pointY} = req.body;
    Save(name,pointX,pointY);
    res.sendStatus(200);
})

app.get('/', (req, res) => {
    var lista = GetAll();
    res.send(lista);
})

app.get('/GetAllClose', (req
                         , res) => {
    const { pointX, pointY, radius } = req.body;

    var lista = GetAllCloseTo(pointX, pointY, radius);
    res.send(lista);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})