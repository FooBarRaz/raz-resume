"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_awesome_resume_1 = __importDefault(require("react-awesome-resume"));
const react_snapshot_1 = require("react-snapshot");
require("semantic-ui-css/semantic.min.css");
const raz_resume_1 = require("./raz-resume");
(0, react_snapshot_1.render)(react_1.default.createElement(react_awesome_resume_1.default, { jsonResume: raz_resume_1.raz, theme: "default" }), document.getElementById("root"));
exports.default = react_awesome_resume_1.default;
