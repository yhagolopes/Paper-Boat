export function getCenterOf(position, size) {
    return {
        x: position.x + (size.x / 2),
        y: position.y + (size.y / 2)
    };
}

// Calculate hypotenuse
export function getDistance(pos1, pos2) {
    let x = pos1.x - pos2.x;
    let y = pos1.y - pos2.y;
    let distance = Math.sqrt((x * x) + (y * y));
    
    return distance;
}

export function checkCollide(circlePos, circleRadius, collidePoint) {
    let distanceToObject = getDistance(collidePoint, circlePos);

    if (circleRadius >= distanceToObject) {
        return true;
    }

    return false;
}

export function getPositionTo(objectPos, circlePos, collidePoint) {
    return {
        x: objectPos.x + (collidePoint.x - circlePos.x), 
        y: objectPos.y + (collidePoint.y - circlePos.y)
    };
}

export function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}