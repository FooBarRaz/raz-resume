"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_snapshot_1 = require("react-snapshot");
const raz_resume_1 = require("./raz-resume");
const react_awesome_resume_1 = __importDefault(require("react-awesome-resume"));
require("semantic-ui-css/semantic.min.css");
const react_1 = __importDefault(require("react"));
const mapOfSkillLevelsToDescriptions = {
    90: "Master",
    80: "Expert",
    70: "Advanced",
    60: "Proficient",
    50: "Intermediate",
    40: "Competent",
    30: "Novice",
    20: "Beginner",
    10: "Fundamental Awareness",
};
// Resume.defaultProps = {
//   jsonResume: raz,
//   theme: 'default',
//   inline: false,
// };
// Resume.propTypes = {
//   jsonResume: resumeType.isRequired,
//   theme: PropTypes.string,
//   inline: PropTypes.bool,
// };
(0, react_snapshot_1.render)(react_1.default.createElement(react_awesome_resume_1.default, { jsonResume: raz_resume_1.raz, theme: "default" }), document.getElementById("root"));
exports.default = react_awesome_resume_1.default;
