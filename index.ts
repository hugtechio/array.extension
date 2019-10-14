/* eslint no-extend-native: ["error", { "exceptions": ["Array","Object"] }] */

export {}

declare global {
    interface Array<T> {
        uniq<T> (comparer: (value1: T, valu2: T) => boolean): T[];
        contains<T> (value: T): boolean;
        findExactOne<T> (matcher: (value: T) => boolean): T | null;
    }
    interface Object {
        has (key: string): boolean;
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
