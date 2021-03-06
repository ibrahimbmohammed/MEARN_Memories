"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var redux_1 = require("redux");
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var reducers_1 = require("./redux/reducers");
exports.store = (0, redux_1.createStore)(reducers_1.rootReducers, (0, redux_1.compose)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));
