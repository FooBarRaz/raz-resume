import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import { raz } from "./raz-resume";

const skillLevelThresholds: [number, string][] = [
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

function getSkillLevelDescription(level: number): string {
  for (const [threshold, description] of skillLevelThresholds) {
    if (level >= threshold) return description;
  }
  return "Fundamental Awareness";
}

export const transform = (source: typeof raz): ResumeSchema => {
  return {
    ...source,
    work: source.work.map((work) => {
      if (work.endDate === "Present") {
        const { endDate, ...restOfWork } = work;
        return restOfWork;
      }
      return work;
    }),
    skills: source.skills.map((skill) => {
      return {
        name: skill.name,
        level: getSkillLevelDescription(skill.level),
        keywords: skill.keywords,
      };
    }),
  };
};
