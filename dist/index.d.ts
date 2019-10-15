export {};
declare global {
    interface Array<T> {
        uniq<T>(comparer: (value1: T, valu2: T) => boolean): T[];
        contains<T>(value: T): boolean;
    }
    interface Object {
        has(key: string): boolean;
        filterKeys(keys: string[]): Object;
        indexed(): IndexObject;
    }
}
interface IndexObject {
    [index: string]: string;
}
