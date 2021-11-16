"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
var posts_1 = __importDefault(require("../routes/posts"));
dotenv_1.default.config();
//amdal
// application configuration
var app = (0, express_1.default)();
var PORT = process.env.PORT || 8000;
var connectionUrl = process.env.DATA_BASE_URI;
// middlewares
app.use(express_1.default.json({ limit: '25mb' }));
app.use(express_1.default.urlencoded({
    limit: '25mb',
    extended: true,
}));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use('/posts', posts_1.default);
// database connection
mongoose_1.default.connect(connectionUrl).then(function () { return (console.log("connection successful")); }).catch(function (error) { return (console.log(error)); });
// application routing
app.get("/", function (req, res) {
    res.send("Hello Typescript with Node.js!");
});
// listeners
app.listen(PORT, function () {
    console.log("Server Running here \uD83D\uDC49 https://localhost:" + PORT);
});
//nnn
