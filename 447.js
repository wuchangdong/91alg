/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let result = 0;
    for (let i = 0; i < points.length; i++) {
        const map = new Map();

        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                const dis = getDis(points[i], points[j]);
                if (map.has(dis)) {
                    map.set(dis, map.get(dis) + 1);
                }
                else {
                    map.set(dis, 1);
                }
            }
        }

        for (let count of map.values()) {
            if (count > 1) {
                result += count * (count - 1);
            }
        }
    }
    return result;
};


function getDis(x, y) {
    const distanceX = x[0] - y[0];
    const distanceY = x[1] - y[1];
    return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
}
