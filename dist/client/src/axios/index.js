"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.createPost = exports.fetchPost = void 0;
var axios_1 = __importDefault(require("axios"));
var baseURL = "http://localhost:8000";
var fetchPost = function () { return axios_1.default.get(baseURL + "/posts"); };
exports.fetchPost = fetchPost;
var createPost = function (newPost) { return axios_1.default.post(baseURL + "/posts", newPost); };
exports.createPost = createPost;
var updatePost = function (id, updatedPost) { return axios_1.default.patch(baseURL + "/" + id, updatedPost); };
exports.updatePost = updatePost;
