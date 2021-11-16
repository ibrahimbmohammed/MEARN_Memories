"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var bs_1 = require("react-icons/bs");
var index = function () {
    return (<nav className="flex w-screen h-16 bg-white items-center justify-between px-8 fixed top-0">
            <div className="flex items-center justify-between w-1/2">
                <div className="flex space-x-2">
                    <span>
                        <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2Zm6-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V2Zm0 8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Z" fill="#5B6871"/></svg>
                    </span>
                    <span>
                    <svg width="14" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.395.553a1 1 0 0 0-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.362 31.362 0 0 0-.613 3.58 2.64 2.64 0 0 1-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 0 0 2.05 4.05 6.981 6.981 0 0 0 0 9a7 7 0 1 0 11.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03ZM9.12 13.12A3 3 0 0 1 4 11s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0 1 10 11a2.99 2.99 0 0 1-.879 2.121l-.001-.001Z" fill="#F76659"/></svg> 
                    </span>
                </div>
                {/* end of logo */}
                <span>
                    <h3 className="font-semibold">Your Work</h3>
                </span>
                <span className="flex items-center justify-center">
                <h3 className="font-semibold">Projects</h3>
                    <span className="inner_span  mt-1 pl-1 text-gray-800 ">
                    <svg width="10" height="6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 .5 4 4 4-4" stroke="#6E7C87"/></svg>
                    </span>
                </span>
                <span className="flex items-center justify-center">
                <h3 className="font-semibold">Filters</h3>
                    <span className="inner_span  mt-1 pl-1 text-gray-800 ">
                    <svg width="10" height="6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 .5 4 4 4-4" stroke="#6E7C87"/></svg>
                    </span>
                </span>
                <span className="flex items-center justify-center">
                <h3 className="font-semibold">Dashboard</h3>
                    <span className="inner_span  mt-1 pl-1 text-gray-800 ">
                    <svg width="10" height="6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 .5 4 4 4-4" stroke="#6E7C87"/></svg>
                    </span>
                </span>
                <span className="flex items-center justify-center">
                <h3 className="font-semibold">People</h3>
                    <span className="inner_span  mt-1 pl-1 text-gray-800 ">
                    <svg width="10" height="6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 .5 4 4 4-4" stroke="#6E7C87"/></svg>
                    </span>
                </span>
                <span className="flex items-center justify-center">
                <h3 className="font-semibold">Apps</h3>
                    <span className="inner_span  mt-1 pl-1 text-gray-800 ">
                    <svg width="10" height="6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 .5 4 4 4-4" stroke="#6E7C87"/></svg>
                    </span>
                </span> 
                <button className="rounded-md py-2 px-4 border border-gray-200">
                    create
                </button>
            </div>
            {/* end of first flex */}
            <div className="flex space-x-8">
               <div className="relative">
                <input className="border border-gray-200 pl-8 py-2 rounded-md " type="text" placeholder="Search"/>   
                <span className="absolute left-2   top-3">
                <bs_1.BsSearch color="#d3d3d3" size="1rem"/>
                </span>
               </div> 
               {/* end of second div */}
               <div className="flex items-center justify-center space-x-2 text-4xl">
                   <span className="">
                   <svg width="14" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0a6 6 0 0 0-6 6v3.586l-.707.707A1 1 0 0 0 1 12h12a1 1 0 0 0 .707-1.707L13 9.586V6a6 6 0 0 0-6-6Zm0 16a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3Z" fill="#5B6871"/></svg>
                   </span>
                   <span>
                   <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8ZM8 5a1 1 0 0 0-.867.5 1 1 0 1 1-1.731-1A3 3 0 1 1 9 8.83V9a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1 1 1 0 0 0 0-2Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="#5B6871"/></svg>
                   </span>
                   <span>
                   <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.49 1.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 0 1-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.06 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 0 1 .947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.533 1.533 0 0 1 2.287.947c.379 1.561 2.6 1.561 2.978 0a1.532 1.532 0 0 1 2.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 0 1 .947-2.287c1.56-.379 1.56-2.6 0-2.978a1.532 1.532 0 0 1-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 0 1-2.287-.947V1.17ZM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="#5B6871"/></svg>
                   </span>
                   <span className="w-6 h-6 rounded-full bg-black">
                       <img src="" alt=""/>
                   </span>
               </div>
            </div>
        </nav>);
};
exports.default = index;
