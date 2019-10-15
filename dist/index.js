"use strict";
/* eslint no-extend-native: ["error", { "exceptions": ["Array","Object"] }] */
Object.defineProperty(exports, "__esModule", { value: true });
//
// Array extension
//
Array.prototype.uniq = function (comparer) {
    return this.filter((value1, index1, array1) => {
        const index2 = array1.findIndex((value2) => comparer(value1, value2));
        return (index1 === index2);
    });
};
Array.prototype.contains = function (value) {
    return (this.indexOf(value) >= 0);
};
Object.prototype.has = function (key) {
    return Object.keys(this).contains(key);
};
Object.prototype.filterKeys = function (attributes) {
    let ret = {};
    const indexed = this.indexed();
    Object.keys(this).forEach(key => {
        if (attributes.contains(key)) {
            ret[key] = indexed[key];
        }
    });
    return ret;
};
Object.prototype.indexed = function () {
    return this;
};
