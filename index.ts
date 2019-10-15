import { tsAnyKeyword } from "@babel/types"

/* eslint no-extend-native: ["error", { "exceptions": ["Array","Object"] }] */

export {}


declare global {
    interface Array<T> {
        uniq<T> (comparer: (value1: T, valu2: T) => boolean): T[];
        contains<T> (value: T): boolean;
    }
    interface Object {
        has (key: string): boolean;
        filterKeys (keys: string[]): Object;
        indexed (): IndexObject;
    }
}

Array.prototype.uniq = function<T> (comparer: (value1: T, valu2: T) => boolean): T[] {
    return this.filter((value1, index1, array1): boolean => {
        const index2 = array1.findIndex((value2): boolean => comparer(value1, value2))
        return (index1 === index2)
    })
}

Array.prototype.contains = function<T> (value: T): boolean {
    return (this.indexOf(value) >= 0)
}

interface IndexObject {
    [index: string]: string
}

Object.prototype.has = function (key: string): boolean {
    return Object.keys(this).contains(key)
}

Object.prototype.filterKeys = function (attributes: string[]): Object {
    let ret: IndexObject = {}
    const indexed = this.indexed()
    Object.keys(this).forEach(key => {
        if (attributes.contains(key)) {
            ret[key] = indexed[key]
        }
    })
    return ret
}

Object.prototype.indexed = function (): IndexObject {
    return this as IndexObject
}



