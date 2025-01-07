import express from 'express';
const db = require('./config/db');
import {POIsController} from "./controllers/POIsController";
import {ServicePOIs} from "./service/ServicePOI";
import {POIRepository} from "./repository/RepositoryPOI";
require('dotenv').config();

const app = express();
const port = 3000 || process.env.PORT;

app.use(express.json());

let controller = new POIsController(new ServicePOIs(new POIRepository(db.connect())))

app.get('/', controller.GetAll);

app.post('/', controller.Save);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
