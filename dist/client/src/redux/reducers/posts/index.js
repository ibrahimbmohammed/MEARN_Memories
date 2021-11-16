"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var postReducer = function (state, actions) {
    if (state === void 0) { state = initialState; }
    switch (actions.type) {
        case "FETCH_ALL":
            return __spreadArray(__spreadArray([], state, true), [actions.payload], false);
        case "ADD_POST":
            return __spreadArray(__spreadArray([], state, true), [actions.payload], false);
        default: // need this for default case
            return state;
    }
};
var initialState = [];
exports.default = postReducer;
