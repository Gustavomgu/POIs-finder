import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PointOfInteressDatabase {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column("name")
    nome: string;

    @Column("pointX")
    pointX: number;

    @Column("pointY")
    pointY: number;
}