import PointOfInteress from './pointOfInteress.js';

export async function Save(name, pointX, pointY) {
    return await PointOfInteress.create({name, pointX, pointY});
}

export async function GetAll() {
    return await PointOfInteress.findAll();
}

export async function GetAllCloseTo(pointX, pointY, radius) {
    var list = await GetAll()

    return list.filter((item) => {
        return calcularDistancia(item.pointX, item.pointY, pointX, pointY) <= radius;
    });
}

export function calcularDistancia(x1, y1, x2, y2) {
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;

    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}