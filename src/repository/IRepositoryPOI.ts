export interface IRepositoryPOI<T> {
    save(name : string, pointX : number, pointY : number): void;
    getAll(): Promise<T[]>;
}