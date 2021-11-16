"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var posts_1 = require("../../controllers/posts");
var routes = express_1.default.Router();
routes.get('/', posts_1.getAllPosts);
routes.post('/', posts_1.addPosts);
exports.default = routes;
