"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducers = void 0;
var redux_1 = require("redux");
var posts_1 = __importDefault(require("../reducers/posts"));
exports.rootReducers = (0, redux_1.combineReducers)({
    posts: posts_1.default
});
