"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var card_1 = __importDefault(require("../card"));
var react_redux_1 = require("react-redux");
function Index() {
    var posts = (0, react_redux_1.useSelector)(function (state) { return state.posts; });
    // in the useSelector , a function gives you access to the whole state object, which you can use. the name tally with the one being passed down in the combineReducres  function
    return (<div className="w-2/3 h-screen grid grid-cols-3 gap-0  items-center justify-items-center">
            {posts.map(function (post) {
            <card_1.default />;
        })}
      
        </div>);
}
exports.default = Index;
