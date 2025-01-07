import {IRepositoryPOI} from "../repository/IRepositoryPOI";
import {PointOfInteressDatabase} from "../repository/PointOfInteressEntity";
import {PointOfInteress} from "../models/PointOfInteress";
import {IServicePOIs} from "./IServicePOI";

export class ServicePOIs implements IServicePOIs {
    private repository : IRepositoryPOI<PointOfInteressDatabase>;

    constructor(repository : IRepositoryPOI<PointOfInteressDatabase>) {
        this.repository  = repository;
    }

    Save(name: string, pointX: number, pointY: number): void {
        this.repository.save(name, pointX, pointY);
    }

    GetAll(): PointOfInteress[] {
        var list
        this.repository.getAll().then(p => {
            p.map(point => {
                list = new PointOfInteress(point.nome, point.pointX, point.pointY);
            })
        });
        return list;
    }

    SearchForClosePOI(pointX, pointY: number, radius: number): PointOfInteress[] {
        var point = new PointOfInteress("test", pointX, pointY);
        var list = this.GetAll()
        return list.map(p => {
            if (p.IsItClose(point, radius)) {
                return p;
            }
        });
    }
}