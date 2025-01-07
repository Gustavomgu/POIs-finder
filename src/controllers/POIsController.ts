import {IServicePOIs} from "../service/IServicePOI";

export class POIsController {
    private service : IServicePOIs

    constructor(service : IServicePOIs) {
        this.service = service;
    }

    public async GetAll(req, res) {
        try{
            const POIs = this.service.GetAll()
            res.status(200).json(POIs);
        } catch(err){
            res.status(500).json('An error occurred when trying to retrieve POIs. %s',err);
        }
    }

    public async Save(req, res) {
        const {name, pointX, pointY} = req.body;
        try {
            this.service.Save(name, pointX, pointY)
            res.status(201).json('Point Created with success!');
        } catch (err) {
            res.status(400).json("An error occurred an trying to save POIs. %s", err);
        }
    }
}