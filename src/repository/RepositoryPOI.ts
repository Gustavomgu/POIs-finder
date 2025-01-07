import { IRepositoryPOI } from './IRepositoryPOI';
import { PointOfInteressDatabase } from './PointOfInteressEntity';
import { Repository } from 'typeorm';
import { DataSource } from 'typeorm';

export class POIRepository implements IRepositoryPOI<PointOfInteressDatabase>{
    private POIRepository: Repository<PointOfInteressDatabase>;

    constructor(private datasource : DataSource) {
        this.POIRepository = datasource.getRepository(PointOfInteressDatabase);
    }

    save(name: string, pointX: number, pointY: number): void {
        this.POIRepository.save({
            name,
            pointX,
            pointY,
        });
    }

    getAll(): Promise<PointOfInteressDatabase[]> {
        return this.POIRepository.find();
    }

}