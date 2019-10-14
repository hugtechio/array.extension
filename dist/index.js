"use strict";
/* eslint no-extend-native: ["error", { "exceptions": ["Array","Object"] }] */
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.uniq = function (comparer) {
    return this.filter((value1, index1, array1) => {
        const index2 = array1.findIndex((value2) => comparer(value1, value2));
        return (index1 === index2);
    });
};
Array.prototype.contains = function (value) {
    return (this.indexOf(value) >= 0);
};
