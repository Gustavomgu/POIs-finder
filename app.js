import express from "express";
import {Save, GetAll, GetAllCloseTo} from './service.js';

const app = express()
const port = 3000

app.use(express.json());

app.post('/', (req, res) => {
    const {name, pointX, pointY} = req.body;
    Save(name,pointX,pointY).then(p => {
            res.send(p).status(201);
    }).catch(err => res.status(400).send({error: err.message}));
})

app.get('/GetAll', async (req, res) => {
    var lista = await GetAll();
    res.send(lista);
})

app.get('/GetAllClose', async (req
    , res) => {
    const {pointX, pointY, radius} = req.body;

    var lista = await GetAllCloseTo(pointX, pointY, radius);
    res.send(lista);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})