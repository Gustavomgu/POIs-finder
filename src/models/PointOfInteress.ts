import { IRepositoryPOI } from '../repository/IRepositoryPOI';

export class PointOfInteress {
    private name: string
    private pointX: number
    private pointY: number

    public constructor(name: string, pointX: number, pointY: number) {
        this.name = name;
        this.pointX = pointX;
        this.pointY = pointY;
    }

    public ToString() : string {
        return this.name;
    }

    public Save(repo : IRepositoryPOI<PointOfInteress>){
        repo.save(this.name,this.pointX,this.pointY);
    }

    public IsItClose(point : PointOfInteress, radius : number) : Boolean {
        return (point.pointX - this.pointX < radius) && (point.pointY - this.pointY < radius);
    }
}
