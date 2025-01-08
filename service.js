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

export function GetAllCloseTo(pointX, pointY, radius) {
    var list = GetAll()
    return list.map((item) => {
        if (item.pointX - pointX <= radius && item.pointY - pointY <= radius) {
            return item;
        }
    })
}