export {};
declare global {
    interface Array<T> {
        uniq<T>(comparer: (value1: T, valu2: T) => boolean): T[];
        contains<T>(value: T): boolean;
        findExactOne<T>(matcher: (value: T) => boolean): T | null;
    }
    interface Object {
        has(key: string): boolean;
    }
}
