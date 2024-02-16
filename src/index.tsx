import { render } from 'react-snapshot';
import { raz, resumeType } from './raz-resume';
import Resume from 'react-awesome-resume';
import 'semantic-ui-css/semantic.min.css';
import React from 'react';


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
}

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

render(
  <Resume jsonResume={raz} theme="default" />,
  document.getElementById("root")
);

export default Resume;
