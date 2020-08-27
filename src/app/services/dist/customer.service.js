"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var compare = function (v1, v2) { return (v1 < v2 ? -1 : v1 > v2 ? 1 : 0); };
function sort(customers, column, direction) {
    if (direction === '' || column === '') {
        return customers;
    }
    else {
        return __spreadArrays(customers).sort(function (a, b) {
            var res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
