"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
const skillLevelThresholds = [
    [90, "Master"],
    [80, "Expert"],
    [70, "Advanced"],
    [60, "Proficient"],
    [50, "Intermediate"],
    [40, "Competent"],
    [30, "Novice"],
    [20, "Beginner"],
    [10, "Fundamental Awareness"],
];
function getSkillLevelDescription(level) {
    for (const [threshold, description] of skillLevelThresholds) {
        if (level >= threshold)
            return description;
    }
    return "Fundamental Awareness";
}
const transform = (source) => {
    return Object.assign(Object.assign({}, source), { work: source.work.map((work) => {
            if (work.endDate === "Present") {
                const { endDate } = work, restOfWork = __rest(work, ["endDate"]);
                return restOfWork;
            }
            return work;
        }), skills: source.skills.map((skill) => {
            return {
                name: skill.name,
                level: getSkillLevelDescription(skill.level),
                keywords: skill.keywords,
            };
        }) });
};
exports.transform = transform;
