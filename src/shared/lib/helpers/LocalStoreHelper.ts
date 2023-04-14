import { objsEqual } from "~shared/lib/helpers/objsEqual";

export class LocalStoreHelper {
    public static setItem(key: string, value: string, rewrite: boolean = false) {
        if (rewrite) {
            localStorage.setItem(key, value);
        } else {
            if (localStorage.getItem(key) === null) {
                localStorage.setItem(key, value);
            } else {
                console.error(`${key} is already exists`);
            }
        }
    }

    public static getItem(key: string): string | null {
        const item = localStorage.getItem(key);
        if (item == null) {
            console.error(`${key} doesn't exist in local storage`);
            return null;
        }
        return item;
    }

    public static deleteFromArray<T>(key: string, value: T): T[] {
        const arr = this.getArray(key);
        if (arr === null) return;

        const newArr = arr.filter(item => {
            if (typeof item === "object" && item !== null) {
                return !objsEqual(item, value);
            } else {
                return value !== item;
            }
        });
        this.setObj(key, newArr, true);
        return newArr;
    }

    public static addToArray<T>(key: string, value: T): T[] {
        const arr = this.getArray(key);
        if (arr === null) return;
        arr.push(value);
        this.setObj(key, arr, true);
        return arr;
    }

    public static setObj<T>(key: string, obj: T, rewrite: boolean = false) {
        if (typeof obj === "object" && obj !== null) {
            this.setItem(key, JSON.stringify(obj), rewrite);
        } else {
            console.error(`${obj} is not object`);
        }
    }

    public static getArray(key: string): any[] | null {
        const item = this.getItem(key);
        if (item === null) return null;

        const arr = JSON.parse(item);
        if (!Array.isArray(arr)) {
            console.error(`Item in ${key} is not array`);
            return null;
        }
        return arr;
    }
}
