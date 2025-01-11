import { Save, GetAll, GetAllCloseTo } from '../services/service.js';

export const createPoint = async (req, res) => {
    try {
        const { name, pointX, pointY } = req.body;
        const result = await Save(name, pointX, pointY);
        res.status(201).send(result);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};

export const getAllPoints = async (req, res) => {
    try {
        const points = await GetAll();
        res.status(200).send(points);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};

export const getAllClosePoints = async (req, res) => {
    try {
        const { pointX, pointY, radius } = req.query;
        const points = await GetAllCloseTo(pointX, pointY, radius);
        res.status(200).send(points);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};
