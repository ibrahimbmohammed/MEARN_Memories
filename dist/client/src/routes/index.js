"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var search_1 = __importDefault(require("../pages/search"));
var patient_1 = __importDefault(require("../pages/patient"));
var calender_1 = __importDefault(require("../pages/calender"));
var manage_1 = __importDefault(require("../pages/manage"));
var settings_1 = __importDefault(require("../pages/settings"));
var react_router_dom_1 = require("react-router-dom");
var Routes = function () {
    return (<react_router_dom_1.Switch>
            <react_router_dom_1.Route path='/' exact component={search_1.default}/>
            <react_router_dom_1.Route path='/patients' component={patient_1.default}/>
            <react_router_dom_1.Route path='/calender' component={calender_1.default}/>
            <react_router_dom_1.Route path='/manage' component={manage_1.default}/>
            <react_router_dom_1.Route path='/settings' component={settings_1.default}/>
        </react_router_dom_1.Switch>);
};
exports.default = Routes;
