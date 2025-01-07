import {PointOfInteress} from "../models/PointOfInteress";

export interface IServicePOIs {
    Save(name: string, pointX: number, pointY: number): void;

    GetAll(): PointOfInteress[];

    SearchForClosePOI(pointX, pointY: number, radius: number): PointOfInteress[];
}