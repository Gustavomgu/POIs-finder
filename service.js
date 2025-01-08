const points = []

export function Save(name, pointX, pointY) {
    let point = {
        name: name,
        pointX: pointX,
        pointY: pointY,
    }
    points.push(point);
}

export function GetAll() {
    return points;
}

export function  GetAllCloseTo(pointX, pointY, radius) {
    var list = GetAll()

    return list.filter((item) => {
        return calcularDistancia(item.pointX, item.pointY, pointX, pointY) <= radius;
    });
}

export function calcularDistancia(x1, y1, x2, y2) {
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;

    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}