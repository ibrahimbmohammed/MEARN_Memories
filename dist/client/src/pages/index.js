"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var navbar_1 = __importDefault(require("../components/navbar"));
var main_1 = __importDefault(require("../components/main"));
var form_1 = __importDefault(require("../components/form"));
var main_wrapper_1 = __importDefault(require("../components/main-wrapper"));
var bg_png_1 = __importDefault(require("../assets/img/bg.png"));
var react_redux_1 = require("react-redux");
var posts_1 = require("../redux/actions/posts");
var Layout = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        console.log("heloo");
        dispatch(posts_1.getPosts);
    }, [dispatch]);
    return (<div className="flex w-screen h-auto flex-col" style={{ backgroundImage: "url(" + bg_png_1.default + ")", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
            <navbar_1.default />
           <main_wrapper_1.default>
            <main_1.default />
            <form_1.default />
            </main_wrapper_1.default>
           
        </div>);
};
exports.default = Layout;
