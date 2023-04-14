export function objsEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true; // если оба объекта ссылаются на один и тот же объект, они равны
    }

    if (typeof obj1 !== typeof obj2) {
        return false; // если типы объектов не совпадают, они не равны
    }

    if (typeof obj1 !== "object" || obj1 === null || obj2 === null) {
        return obj1 === obj2; // если объекты не являются объектами или null, проверяем их равенство
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false; // если количество свойств не совпадает, объекты не равны
    }

    for (let key of keys1) {
        if (!keys2.includes(key) || !objsEqual(obj1[key], obj2[key])) {
            return false; // если ключи не совпадают или значения не равны, объекты не равны
        }
    }

    return true; // если все свойства равны, объекты равны
}