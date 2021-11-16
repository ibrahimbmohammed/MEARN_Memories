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
var react_hook_form_1 = require("react-hook-form");
var react_redux_1 = require("react-redux");
// @ts-ignore
var react_file_base64_1 = __importDefault(require("react-file-base64"));
var posts_1 = require("../../redux/actions/posts");
var Index = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var _a = (0, react_1.useState)(''), image = _a[0], setImage = _a[1];
    var _b = (0, react_hook_form_1.useForm)(), register = _b.register, handleSubmit = _b.handleSubmit;
    var onSubmit = function (values) {
        var data = {
            creator: values.creator,
            title: values.title,
            description: values.description,
            tags: values.tags,
            pic: image
        };
        dispatch((0, posts_1.createPost)(data));
        //console.log(data);
        //console.log(image);
    };
    return (<div className="bg-white rounded-md h-2/3 w-96 flex flex-col justify-center items-center px-4 py-0  space-y-3 shadow-md mt-8">
            <div className="">
            <p className="text-xl font-semibold pt-4">Add</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" w-full">
            <label className="text-gray-400"> Creator</label>
            <input {...register("creator")} type="text" aria-label="Creator" className="p-2 border border-gray-500 w-full  rounded-md py-4"/>
            </div>
            <div className="w-full">
            <label className="text-gray-400">Title</label>
            <input {...register("title")} type="text" className="p-2 border border-gray-500 w-full rounded-md py-4"/>
            </div>
            <div className="w-full">
            <label className="text-gray-400">Description:</label>
            <textarea {...register("description")} className="p-2 border border-gray-500 w-full rounded-md py-4"/>
            </div>
            <div className="w-full">
            <label className="text-gray-400">Tags (comma seperated)</label>
            <input {...register("tags")} type="text" className="p-2 border border-gray-500 w-full rounded-md py-4"/>
            </div>
            <div className="w-full">
           <react_file_base64_1.default type="file" multiple={false} onDone={function (_a) {
        var base64 = _a.base64;
        return setImage(base64);
    }}/> 
            </div>
            <div className="w-full">
            <button className="w-full py-3 rounded-md text-white bg-blue-600 " type="submit"> SUBMIT</button>
            </div>
            <div className="w-full pb-2">
            <button className="w-full rounded-md py-2 text-white bg-red-600"> CLEAR</button>
            </div>
            </form>
        </div>);
};
exports.default = Index;
