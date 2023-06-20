export function checkCollide(object1, object2) {
    if (object1.position.x >= object2.position.x && 
        object1.position.x <= object2.position.x + object2.width &&
        object1.position.y >= object2.position.y && 
        object1.position.y <= object2.position.y + object2.height) {
        return true;
    }
    return false;
}

export function getDistance(pos1, pos2) {
    let x = pos1.x - pos2.x;
    let y = pos1.y - pos2.y;
    let distance = Math.sqrt((x * x) + (y * y));
    
    return distance;
}