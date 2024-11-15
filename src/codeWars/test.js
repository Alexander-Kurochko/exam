function buildTower(floors) {
    let tower = [];
    let maxWidth = 2 * floors - 1;

    for (let i = 0; i < floors; i++) {
        let width = 2 * i + 1;
        let spaces = (maxWidth - width) / 2;
        let floor = ' '.repeat(spaces) + '*'.repeat(width) + ' '.repeat(spaces);
        tower.push(floor);
    }

    return tower;
}

// Пример использования:
let floors = 3;
let tower = buildTower(floors);
tower.forEach(floor => console.log(floor));